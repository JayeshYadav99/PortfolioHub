import React from 'react'
import Card from '../Card'
export default function Hackathon() {
  return (
<div>
      <section>
        <div class="bg-white dark:bg-gray-900">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Competitions, Fests, Workshops, & more!
              </h1>

              <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Participate in various opportunities
to showcase your skills & get rewarded!</p>
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get started
                <svg
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="https://d8it4huxumps7.cloudfront.net/uploads/images/63c7ae771c4a1_competitions_hero.png"
                alt="mockup"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">

            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Hackathons</span></h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">A hackathon is an intense and collaborative event where individuals or teams come together to work on creative projects, typically in the field of technology or software development. Participants brainstorm, design, and develop innovative solutions within a limited timeframe, fostering creativity, problem-solving skills, and teamwork.</p>

          </div>
        </div>
      </section>
      <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card image={`https://media-fastly.hackerearth.com/media/hackathon/titan-technext-hackathon-2023/images/a32735b0ef-cover_1_1_1.jpg`} text={`Future Wear Techathon 2023`} title={`Future Wear Techathon 2023`} 
          link={`https://www.hackerearth.com/challenges/hackathon/titan-technext-hackathon-2023/`}/>
          <Card image={`https://media-fastly.hackerearth.com/media/hackathon/consensus-2023/images/1c5affdada-banner_sprint_and_hc_cover_2700-600_copy_1-min.jpg`} text={`As part of Consensus, the 2023 Web3athon will focus on bringing web2 developers into web3 and supporting web3 native builders and newcomers with partner grant programs awarding cash prizes to winning teams.  This hackathon is laser-focused on teams and projects open to seeking out the right protocol to build on. It will showcase the grant and DevRel initiatives of our partner protocols and foundations.`} title={`Consensus 2023 Hackathon`}
        link={`https://web3athon2023.hackerearth.com/`} />
          <Card image={`https://media-fastly.hackerearth.com/media/hackathon/incode-2023-challenging-injustice/images/fa99ccbed8-incode_header.png`} text={`One of the top 2 mobile travel services in the world is hosting a hackathon. We are looking for ideas and solutions to improve the safety and accessibility of city ride, traveling between cities or delivering goods..`} title={`InCode 2023 — Challenging injustice`} link={`https://www.hackerearth.com/challenges/hackathon/incode-2023-challenging-injustice/`} 
      />
        </div>
      </section>
      <section>
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">

            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Technical events and conferences</span></h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">These events provide a platform for networking, knowledge sharing, and showcasing the latest advancements in areas such as software development, artificial intelligence, cybersecurity, data science, and more.</p>
          </div>
        </div>
      </section>
      <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card title={`Young Leaders' Summit (YLS)`} image={`https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/643cc890e34d7_young-leaders-summit.png?d=1920x557`} text={`Young Leaders’ Summit brings together corporate leaders and young minds who aspire to become future business leaders.The delegates will take part in a 3-day offline summit which provides them a peek into the corporate world, and its challenges and lets them experience management tools and techniques. The delegates get a chance to interact and learn from IIM Bangalore’s renowned faculty, participate in workshops and interact with corporate leaders.`} />
          <Card title={`JSConf India 2023`} image={`https://jsconf.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjsconfindia-announcement.f96fabc3.png&w=828&q=100`} text={`
Join the Indian edition of the most prestigious JavaScript conference, hosted by the International JavaScript community, for a dynamic and immersive experience that celebrates the power and versatility of JavaScript.`} />
          <Card title={`UX research - Meet and Greet`} image={`Ux.webp`} text={`Let's chat! We are hosting a low-key event to get to know you all a little better. During our Meet and Greet, we'll discuss things like how often we should meet and where. See you soon!`} />
        </div>
      </section>
      <section>
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">

            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Internships And Job Oppurtunities</span></h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Discover exciting internships and job opportunities that open doors to kickstart your career or take it to the next level. Explore a wide range of industries, connect with leading companies, and unleash your potential by securing internships or full-time positions that align with your skills, passions, and aspirations.</p>
          </div>
        </div>
      </section>
      <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card title={`Senior Front-End Software Engineer`} image={`https://d27i7n2isjbnbi.cloudfront.net/careers/photos/251405/normal_photo_1639157680.jpg`} text={`Major League Hacking is looking for a part-time contract Senior Front-End Software Engineer to join the team responsible for building the products that help aspiring software engineers level up and launch their careers. The software that you and your team write will power the largest community of early career developers in the world and help redefine the future of work & technical education.`} />
          <Card title={`Fullstack Software Engineer - Ruby on Rails`} image={`https://th.bing.com/th/id/OIP.xYxs-lzvgpbhyqEuA5MxZAHaEK?w=322&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7`} text={`
Major League Hacking is looking for a part-time contract Fullstack Software Engineer to join the team responsible for building the products that help aspiring software engineers level up and launch their careers. The software that you and your team write will power the largest community of early career developers in the world and help redefine the future of work & technical education`} />
          <Card title={`Android Developer Intern`} image={`https://cdn-dynamic.talent.com/ajax/img/get-logo.php?empcode=swaayam-in&empname=SKILL+IQ&v=024`} text={`Gain hands-on experience and enhance your skills as an Android developer through this internship opportunity. Join our team to design and develop cutting-edge applications for the Android platform, allowing you to showcase your creativity and contribute to the ever-evolving world of mobile app development.`} />
        </div>
      </section>
      {/* <section className="tracks-section pt-20 md:pt-20 mb-20 md:mb-20">
        <div className="lg-container">
          <div className="section-header items-center self-center mb-8 md:mb-12">
          
            <div className="lg-container container">
  <div className="track-icons"style={{ display: "flex", justifyContent: "center" }}>
    <img
      alt=""
      role="presentation"
      className="c-icon c-track-icon"
      src="https://dg8krxphbh767.cloudfront.net/tracks/unison.svg"
    />
    <img
      alt=""
      role="presentation"
      className="c-icon c-track-icon"
      src="https://dg8krxphbh767.cloudfront.net/tracks/r.svg"
    />
    <img
      alt=""
      role="presentation"
      className="c-icon c-track-icon"
      src="https://dg8krxphbh767.cloudfront.net/tracks/emacs-lisp.svg"
    />
    <img
      alt=""
      role="presentation"
      className="c-icon c-track-icon"
      src="https://dg8krxphbh767.cloudfront.net/tracks/d.svg"
    />
    <img
      alt=""
      role="presentation"
      className="c-icon c-track-icon"
      src="https://dg8krxphbh767.cloudfront.net/tracks/jq.svg"
    />
    <img
      alt=""
      role="presentation"
      className="c-icon c-track-icon"
      src="https://dg8krxphbh767.cloudfront.net/tracks/scheme.svg"
    />
    <img
      alt=""
      role="presentation"
      className="c-icon c-track-icon"
      src="https://dg8krxphbh767.cloudfront.net/tracks/swift.svg"
    />
    <img
      alt=""
      role="presentation"
      className="c-icon c-track-icon"
      src="https://dg8krxphbh767.cloudfront.net/tracks/wren.svg"
    />
  </div>
  <h1 className="text-h1" style={{ textAlign: "center", fontSize: "32px", color: "green" }}>
    67 languages for you to master
  </h1>
  <p className="text-p-large" style={{ textAlign: "center", fontSize: "18px", color: "green" }}>
    Become fluent in your chosen programming languages by completing these tracks created by our{" "}
    <a href="/contributing/contributors">awesome team of contributors</a>
  </p>
</div>


            <hr className="c-divider --large" />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="mb-62 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8">
          <a className="track m-auto " href="/tracks/python">
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <img
      alt="Python"
      className="c-track-icon  --python center"
      onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
      src="https://dg8krxphbh767.cloudfront.net/tracks/python.svg"
    />
    <div className="title text-center">Python</div>
    <div className="students-count text-center">333239 students</div>
  </div>
</a>
            <a className="track" href="/tracks/javascript">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                alt="JavaScript"
                className="c-track-icon  --javascript"
                onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                src="https://dg8krxphbh767.cloudfront.net/tracks/javascript.svg"
              />
              <div className="title">JavaScript</div>
              <div className="students-count">277122 students</div>
              </div>
            </a>
            <a className="track" href="/tracks/java">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                alt="Java"
                className="c-track-icon  --java"
                onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                src="https://dg8krxphbh767.cloudfront.net/tracks/java.svg"
              />
              <div className="title">Java</div>
              <div className="students-count">132104 students</div>
              </div>
            </a>
            
        
            <a className="track" href="/tracks/go">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                alt="Go"
                className="c-track-icon  --go"
                onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                src="https://dg8krxphbh767.cloudfront.net/tracks/go.svg"
              />
              <div className="title">Go</div>
              <div className="students-count">92260 students</div>
              </div>
            </a>
            <a className="track" href="/tracks/cpp">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                alt="C++"
                className="c-track-icon  --cpp"
                onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                src="https://dg8krxphbh767.cloudfront.net/tracks/cpp.svg"
              />
              <div className="title">C++</div>
              <div className="students-count">86405 students</div>
              </div>
            </a>
            <a className="track" href="/tracks/csharp">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                alt="C#"
                className="c-track-icon  --csharp"
                onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                src="https://dg8krxphbh767.cloudfront.net/tracks/csharp.svg"
              />
              <div className="title">C#</div>
              <div className="students-count">83361 students</div>
              </div>
            </a>
            <a className="track" href="/tracks/rust">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                alt="Rust"
                className="c-track-icon  --rust"
                onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                src="https://dg8krxphbh767.cloudfront.net/tracks/rust.svg"
              />
              <div className="title">Rust</div>
              <div className="students-count">79523 students</div>
              </div>
            </a>
            <a className="track" href="/tracks/c">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                alt="C"
                className="c-track-icon  --c"
                onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                src="https://dg8krxphbh767.cloudfront.net/tracks/c.svg"
              />
              <div className="title">C</div>
              <div className="students-count">71906 students</div>
              </div>
            </a>
            <a className="track" href="/tracks/typescript">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                alt="TypeScript"
                className="c-track-icon  --typescript"
                onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                src="https://dg8krxphbh767.cloudfront.net/tracks/typescript.svg"
              />
              <div className="title">TypeScript</div>
              <div className="students-count">50027 students</div>
              </div>
            </a>
            <a className="track" href="/tracks/bash">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                alt="Bash"
                className="c-track-icon  --bash"
                onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                src="https://dg8krxphbh767.cloudfront.net/tracks/bash.svg"
              />
              <div className="title">Bash</div>
              <div className="students-count">45681 students</div>
              </div>
            </a>
            <a className="track m-auto" href="/tracks/ruby">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                alt="Ruby"
                className="c-track-icon  --ruby"
                onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                src="https://dg8krxphbh767.cloudfront.net/tracks/ruby.svg"
              />
              <div className="title">Ruby</div>
              <div className="students-count">45504 students</div>
              </div>
            </a>
            <a className="track" href="/tracks/elixir">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                alt="Elixir"
                className="c-track-icon  --elixir"
                onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                src="https://dg8krxphbh767.cloudfront.net/tracks/elixir.svg"
              />
              <div className="title">Elixir</div>
              <div className="students-count">35534 students</div>
              </div>
            </a>
          </div>
          <div class=" mt-20 flex justify-center items-center">
  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Practice Now
    </span>
  </button>
</div>

        </div>
      </section> */}

    </div>
  )
}

