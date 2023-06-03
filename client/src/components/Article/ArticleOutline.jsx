import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FinalArticle from './FinalArticle'

const OutlineSelection = (Intro,Title,numTitles) => {
const [articles, setArticles] = useState([]);
const [isLoading, setIsLoading] = useState(false);
// console.clear();
console.log(Intro);
console.log(Intro.Intro.intro);
console.log(Intro.Title);
console.log(Intro.numTitles)
  async function Output() {
//    const blog_title="How openAI has changed google search";
    const postData = {
        blog_title:`${Intro.Title}`,
        blog_intro:`${Intro.Intro.intro}`
    };
    const config = {
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            'X-API-KEY':`${import.meta.env.VITE_AI_API_KEY}`
        }
    };

    try {
      const temp= Intro.numTitles.toString()
      setIsLoading(true);

        const response = await axios.post(
            `https://api.writesonic.com/v2/business/content/blog-outlines?engine=premium&language=en&num_copies=${temp}`,
            postData,
            config
        );
        
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
    finally{
      setIsLoading(false);

    }
}
async function GiveIntros()
{
    const Newarticles =[];
    const copies = parseInt(Intro.numTitles, 10);

    const response = await Output();
    console.log("this is freaking response");
        console.log(response);
    const title = response.data; 
    
    try {         
            // Assuming the response contains the generated title
            for(let i =0;i<copies;i++){
            let introWithNewLines = JSON.stringify(title[i].text); // Insert double new lines
            console.log("this is new introWithNewLines ",introWithNewLines)

            let withBrTag = introWithNewLines.replace(/\\n/g,"<br>").replace(/^"|"$/g, "").replace(/<br>/g, "<br>&#x25cf; ");
            withBrTag = "&#x25cf; " +withBrTag
            console.log("this is new withBrTag ",withBrTag)
            
            Newarticles.push({ id: Date.now() + Math.random(), intro: withBrTag});
            console.log("this is new articel ",Newarticles)
        }

        setArticles(Newarticles);
    } catch (error) {
        console.error(error);
        // Handle the error appropriately
    } finally{
      setIsLoading(false);

    }
}
  useEffect(() => {
    // Make API call to fetch article intros
    // Example API call:
   GiveIntros();
  }, []);

  const [selectedArticle, setSelectedArticle] = useState('');

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    console.log(article.intro);
  };
  const [Move,SetMove] = React.useState(false);
  const handleNextStep = () => {
    if (selectedArticle) {
      console.log("Selected article intro: ", selectedArticle.intro);
      SetMove(true);
    } else {
      alert('Please select an article');
    }
  };
  // const modifiedIntro = article[0]

  return (
    <>
      {isLoading ? (
        <div className="loadingwraper">
          <div className="loading-spinner">Loading...</div>
        </div>
      ) : (
        <>
          {Move ? (
            <FinalArticle
              Intro={Intro.Intro.intro}
              Title={Intro.Title}
              Outline={selectedArticle}
            />
          ) : (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
              <h2 className="text-2xl font-bold mb-4">Select an Outline</h2>
              <div className="article-list">
                {articles.map((article) => (
                  <div
                    key={article.id}
                    className={`article-card ${
                      selectedArticle === article ? 'selected' : 'not-selected'
                    } bg-${
                      selectedArticle === article ? 'blue' : 'gray'
                    }-200 border border-blue-300 rounded p-4 mb-4 cursor-pointer`}
                    onClick={() => handleArticleClick(article)}
                  >
                    <div dangerouslySetInnerHTML={{ __html: article.intro }} />
                    <br />
                  </div>
                ))}
              </div>
              <button
                onClick={handleNextStep}
                className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
  
};

export default OutlineSelection;
