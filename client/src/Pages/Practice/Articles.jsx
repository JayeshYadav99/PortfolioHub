import React from "react";
import Card from "../Card";
import { Link } from "react-router-dom";
export default function Articles() {
  return (
    <div>
      <section>
        <div class="bg-white dark:bg-gray-900">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Welcome to Practice Section
              </h1>

              <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                "Elevate Your Coding Game: Level up your programming skills with
                hands-on practice and challenging exercises in our dedicated
                Programming Practice Section
              </p>
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
                src="https://cdn.unstop.com/uploads/images/practice/practice-vector.png?d=749x646"
                alt="mockup"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                HackerRank Skills Test
              </span>
            </h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              HackerRank, a platform for learning algorithms and data structures
              and preparing for coding interviews, provides skills
              certifications tests in topics such as problem solving, Python,
              and JavaScript.
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card
            image={`https://www.marketing91.com/wp-content/uploads/2020/06/Problem-Solving-Skills-1024x576.jpg`}
            text={`     Test and certify your basic problem-solving skills with the Problem Solving (Basic) Skills Certification Test by HackerRank..`}
            title={`Problem Solving (Basic) Skills Certification Test`}
            link ={`https://www.hackerrank.com/skills-verification/problem_solving_basic`}
          />
          <Card
            image={`https://clspt-uploads-prd.s3.us-east-1.amazonaws.com/unsigned/post__javascript-certification-0808b8be49caac41e195ae8b19ad8ff5.jpg`}
            text={`Test your knowledge of JavaScript syntax, data types, functions, and basic programming concepts, and validate your proficiency in JavaScript for web development and coding tasks.`}
            title={`JavaScript (Basic) Skills Certification`}
            link={`https://www.hackerrank.com/skills-verification/javascript_basic`}
          />
          <Card
            image={`https://th.bing.com/th/id/OIP.AgacsgdklG2UNqqeBjBfdgHaEK?pid=ImgDet&rs=1`}
            text={`Showcase your abilities in Node.js development and enhance your credentials for backend web development and server-side scripting.`}
            title={`Node (Basic) Skills Certification`}
            link={`https://www.hackerrank.com/skills-verification/nodejs_basic`}
          />
        </div>
      </section>
      <section>
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                {" "}
                Data Structures Practice
              </span>
            </h1>
            <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Sharpen your problem-solving skills and master data structures and
              algorithms with our DSA practice section. Solve coding challenges,
              tackle algorithmic problems, and enhance your proficiency in
              programming for technical interviews and real-world applications.
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card
            title={`DSA Sheet by Love Babbar`}
            image={`https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220211142631/Love-Babbar-DSA-Sheet-450-Coding-Questions-min.png`}
            text={`Master the art of Data Structures and Algorithms with Love Babbar's DSA Sheet, packed with 450 coding questions. Prepare yourself for technical interviews at top companies like Amazon, Microsoft, and Google, by strengthening your understanding of DSA concepts and gaining proficiency in programming languages like C++, Java, or Python, along with the efficient use of STL.`}
            link={`https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/`}
          />
          <Card
            title={`Top 100 DSA interview questions`}
            image={`https://media.geeksforgeeks.org/wp-content/uploads/20230419180619/Top-100-dsa-interview-questions-copy.webp`}
            text={`
Prepare for your next technical interview with the Top 100 DSA interview questions, carefully categorized based on the data structures and algorithms utilized. Enhance your problem-solving skills and excel in interviews by diving into this comprehensive collection of practice questions.`}
link={`https://www.geeksforgeeks.org/top-100-data-structure-and-algorithms-dsa-interview-questions-topic-wise/`}
          />
          <Card
            title={`Top 10 Algorithms and Data Structures for Competitive Programming`}
            image={`https://media.geeksforgeeks.org/wp-content/cdn-uploads/Competitive-Programming-1.jpg`}
            text={`Master the essential algorithms and data structures required for competitive programming with this curated course. Gain a competitive edge by learning and practicing the top 10 algorithms and data structures commonly encountered in programming contests and coding competitions.`}
            link={`https://www.geeksforgeeks.org/top-algorithms-and-data-structures-for-competitive-programming/`}
          />
        </div>
      </section>
      <section className="tracks-section pt-20 md:pt-20 mb-20 md:mb-20">
        <div className="lg-container">
          <div className="section-header items-center self-center mb-8 md:mb-12">
            <div className="lg-container container">
              <div
                className="track-icons"
                style={{ display: "flex", justifyContent: "center" }}
              >
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
              <h1
                className="text-h1"
                style={{
                  textAlign: "center",
                  fontSize: "32px",
                  color: "green",
                }}
              >
                67 languages for you to master
              </h1>
              <p
                className="text-p-large"
                style={{
                  textAlign: "center",
                  fontSize: "18px",
                  color: "green",
                }}
              >
                Become fluent in your chosen programming languages by completing
                these tracks created by our{" "}
                <a href="/contributing/contributors">
                  awesome team of contributors
                </a>
              </p>
            </div>

            <hr className="c-divider --large" />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="mb-62 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8">
            <a className="track m-auto " href="/tracks/python">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  alt="Python"
                  className="c-track-icon  --python center"
                  onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                  src="https://dg8krxphbh767.cloudfront.net/tracks/python.svg"
                />
                <div className="title text-center">Python</div>
                
              </div>
            </a>
            <a className="track" href="/tracks/javascript">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  alt="JavaScript"
                  className="c-track-icon  --javascript"
                  onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                  src="https://dg8krxphbh767.cloudfront.net/tracks/javascript.svg"
                />
                <div className="title">JavaScript</div>

              </div>
            </a>
            <a className="track" href="/tracks/java">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  alt="Java"
                  className="c-track-icon  --java"
                  onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                  src="https://dg8krxphbh767.cloudfront.net/tracks/java.svg"
                />
                <div className="title">Java</div>
               
              </div>
            </a>

            <a className="track" href="/tracks/go">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  alt="Go"
                  className="c-track-icon  --go"
                  onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                  src="https://dg8krxphbh767.cloudfront.net/tracks/go.svg"
                />
                <div className="title">Go</div>
                
              </div>
            </a>
            <a className="track" href="/tracks/cpp">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  alt="C++"
                  className="c-track-icon  --cpp"
                  onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                  src="https://dg8krxphbh767.cloudfront.net/tracks/cpp.svg"
                />
                <div className="title">C++</div>
            
              </div>
            </a>
            <a className="track" href="/tracks/csharp">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  alt="C#"
                  className="c-track-icon  --csharp"
                  onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                  src="https://dg8krxphbh767.cloudfront.net/tracks/csharp.svg"
                />
                <div className="title">C#</div>
               
              </div>
            </a>
            <a className="track" href="/tracks/rust">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  alt="Rust"
                  className="c-track-icon  --rust"
                  onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                  src="https://dg8krxphbh767.cloudfront.net/tracks/rust.svg"
                />
                <div className="title">Rust</div>

              </div>
            </a>
            <a className="track" href="/tracks/c">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  alt="C"
                  className="c-track-icon  --c"
                  onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                  src="https://dg8krxphbh767.cloudfront.net/tracks/c.svg"
                />
                <div className="title">C</div>

              </div>
            </a>
            <a className="track" href="/tracks/typescript">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  alt="TypeScript"
                  className="c-track-icon  --typescript"
                  onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                  src="https://dg8krxphbh767.cloudfront.net/tracks/typescript.svg"
                />
                <div className="title">TypeScript</div>
               
              </div>
            </a>
            <a className="track" href="/tracks/bash">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  alt="Bash"
                  className="c-track-icon  --bash"
                  onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                  src="https://dg8krxphbh767.cloudfront.net/tracks/bash.svg"
                />
                <div className="title">Bash</div>

              </div>
            </a>
            <a className="track m-auto" href="/tracks/ruby">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  alt="Ruby"
                  className="c-track-icon  --ruby"
                  onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                  src="https://dg8krxphbh767.cloudfront.net/tracks/ruby.svg"
                />
                <div className="title">Ruby</div>

              </div>
            </a>
            <a className="track" href="/tracks/elixir">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  alt="Elixir"
                  className="c-track-icon  --elixir"
                  onerror="if (this.src != 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg') this.src = 'https://d24y9kuxp2d7l2.cloudfront.net/assets/graphics/missing-track-e3d861058d4702c1dc4036617689249659b8d37d.svg';"
                  src="https://dg8krxphbh767.cloudfront.net/tracks/elixir.svg"
                />
                <div className="title">Elixir</div>

              </div>
            </a>
          </div>
          <div class=" mt-20 flex justify-center items-center">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <Link to="/Problem"> Practice Now </Link>
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
