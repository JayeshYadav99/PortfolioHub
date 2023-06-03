import React,{useEffect,useState} from "react";
import { BsEyeFill, BsPlayFill } from 'react-icons/bs';


import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useAuth0 } from '@auth0/auth0-react';

const Auth = () => {
    console.log(import.meta.env.VITE_AUTH0_MANAGEMENT_API_KEY);
  const colors = ['bg-purple-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500'];
const [repoColors, setRepoColors] = useState(colors);
  const [avatarURL, setAvatarURL] = useState();
  const [githubUsername, setGitHubUsername] = useState();
  const [repoData, setRepoData] = useState([]);
  const [repoLanguageData, setRepoLanguageData] = useState([]);
  const [showRepos, setShowRepos] = useState(false);
  const { auth0, isLoading, isAuthenticated ,getAccessTokenSilently} = useAuth0();
  const[githubtoken,SetgithubToken]=useState('');


  
  const fetchUserInfo = async (ACCESS_TOKEN) => {
    try {
      const response = await axios.get('https://dev-fkzyzzay6f6jrars.us.auth0.com/userinfo', {
        headers: {
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
       
        },
      });
  return response.data;
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };
  async function auth()
{

      
    const accessToken = await getAccessToken();

// 2. Log the access token
console.log(accessToken);

// 3. Fetch user info using the access token
const Myuser = await fetchUserInfo(accessToken);

// 4. Extract the user ID from the user info
const userId = Myuser.sub;

// 5. Log the user ID
console.log(userId);

     
 var answer;
 

      let  config  =   { 
        method :   'get' , 
        url :   `https://dev-fkzyzzay6f6jrars.us.auth0.com/api/v2/users/${userId}` , 
        headers :   {  
          'Accept' :   'application/json' ,  
          'Authorization' :   `Bearer ${import.meta.env.VITE_AUTH0_MANAGEMENT_API_KEY}`,
          'Content-Type': 'application/json'
        } 
      } ; 
     
     
      axios ( config ) 
      . then ( ( response )   =>   { 
        console . log ( JSON . stringify ( response . data ) ) ; 
         answer =   response.data;
         SetgithubToken(answer.identities[0].access_token);
         octo(answer.identities[0].access_token);
      } ) 
      . catch ( ( error )   =>   { 
        console . log ( error ) ; 
      } ) ;   
 }
 const getAccessToken = async () => {
  if (!isLoading && isAuthenticated) {
    try {
      const accessToken = await getAccessTokenSilently();
      //console.log(accessToken);
      // Use the accessToken for API calls or other purposes
   return accessToken;
    } catch (error) {
      console.error('Failed to obtain access token:', error);
    }
  }
};





async function fetchRepoData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const data = await response.json();
    //console.log(data);
    setRepoData(data);
   
    setRepoLanguageData(reposWithLanguages);

  } catch (error) {
    //console.log(error);
  }
}




async function octo(answer) {
  const headers = {
    'Authorization': `Bearer ${answer}`,
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'octokit.rest'
  };

  try {
    const response = await fetch('https://api.github.com/user', {
      headers: headers
    });

    if (response.ok) {
      const user = await response.json();
      fetchRepoData(user.login);
      const username=user.login;
        fetch(`https://api.github.com/users/${username}`)
          .then((res) => res.json())
          .then(
            (result) => {
              setAvatarURL(result.avatar_url);
              setGitHubUsername(result.login);
            },
            (error) => {
              console.log(error);
            }
          );
     
    } else {

      console.error('Error retrieving user:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error retrieving user:', error);
  }
}



const handleStart = async (repo) => {
  

    window.location.href=`https://codespaces.new/${githubUsername}/${repo.name}?quickstart=1`;
    
  
  };
  















useEffect(() => {
    auth();


  
}, [])


return (
<div className="w-full min-h-screen flex flex-col justify-center items-center p-8">
  <div className="mt-8">
    <Card className="w-64 bg-gray-900">
      <Card.Img variant="top" src={avatarURL} className="w-32 h-32 object-cover mx-auto mt-6 rounded-full p-2" />
      <Card.Body className="p-6">
        <div className="flex flex-col items-center">
          <Card.Title className="font-bold text-xl text-white mb-2">Welcome, {githubUsername}!</Card.Title>
          <Card.Text className="text-gray-400">
            Thank you for exploring our website. You can get anything from everything here.
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => setShowRepos(!showRepos)}
            className="mt-4 bg-purple-500 hover:bg-purple-700 transition-colors duration-300 text-lg py-2 px-4 rounded-lg"
          >
            {showRepos ? "Hide Repos" : "Show Repos"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  </div>
  {showRepos && (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
      {repoData.map((repo, index) => {
      return(
        <Card
          key={repo.id}
          className={`flex flex-col justify-between items-center ${repoColors[2]} text-white hover:bg-pink-500 transition duration-300`}
        >
          <Card.Img variant="top" src="github.png" className="w-32 h-32 object-cover mt-4" />

          <Card.Body className="p-6 flex flex-col justify-between items-center">
            <div className="flex flex-col items-center">
              <Card.Title className="font-bold text-lg mb-2">{repo.name}</Card.Title>
              <Card.Text className="text-gray-200 overflow-hidden text-justify">
                {repo.description}
              </Card.Text>
            </div>

            <div className="flex items-center justify-center w-full mt-4">
              <Button variant={`primary bg-red-500 hover:bg-white hover:text-black`} href={repo.html_url} target="_blank" className="mt-2 flex items-center">
                <BsEyeFill className="mr-2" /> View Repository
              </Button>
              <Button variant={`secondary bg-black hover:bg-white hover:text-black`} className="mt-2 ml-4 flex items-center"  onClick={() => handleStart(repo)}>
                <BsPlayFill className="mr-2" /> Start a Codespace
              </Button>
            </div>
            <div className="mt-6 w-40">
           
          </div>

          </Card.Body>
        </Card>
        
        )
  })}
  
    </div>
  )}
</div>
);

        }


export default Auth;