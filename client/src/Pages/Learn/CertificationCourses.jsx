import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from '../Card';

export default function CertificationCourses() {
  return (
    <div>
      <section>
        <div class="bg-white dark:bg-gray-900">
          <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Welcome to Learning Section
              </h1>
            
              <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">from programming languages to cutting-edge technologies, explore a curated selection of courses and unlock the door to unlimited learning possibilities</p>
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
                src="https://www.freecodecamp.org/news/content/images/size/w2000/2023/01/free-developer-certificates-banner.jpg"
                alt="mockup"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Harvard  Certifications</span></h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Harvard offers a series of academic online courses exploring various facets of computer science, including programming fundamentals and AI.</p>

            </div>
            </div>
      </section>
      <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
  <Card image={`https://courses.javacodegeeks.com/wp-content/uploads/2020/02/8f8e5124-1dab-47e6-8fa6-3fbdc0738f0a-974ffb43cd83.small_-1-767x430.jpg`} text={`This course picks up where CS50 leaves off, diving more deeply into the design and implementation of web apps with Python, JavaScript, and SQL using frameworks like Django, React, and Bootstrap.`} title={`CS50's Web Programming with Python and JavaScript`} link={`https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript?irclickid=Tdc2GTQkHxyNUCVUgrXHJyB4UkAStMTQZ2WtXQ0&utm_source=affiliate&utm_medium=Class%20Central&utm_campaign=Harvard%27s%20Computer%20Science%20for%20Python%20Programming_&utm_content=TEXT_LINK&irgwc=1`}
  />
  <Card image={`https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/8da0f22826d0_w240.webp`} text={`Discover the fundamentals of artificial intelligence  with this comprehensive introductory course. Explore various machine learning techniques, algorithms, and applications..`} title={`CS50's Introduction to Artificial Intelligence with Python`}
  link={`https://www.edx.org/course/cs50s-introduction-to-artificial-intelligence-with-python?irclickid=SXmWBFS8vxyNTLITA1zGq32DUkASO5wkZ2U9yE0&utm_source=affiliate&utm_medium=Class%20Central&utm_campaign=Harvard%27s%20Computer%20Science%20for%20Python%20Programming_&utm_content=TEXT_LINK&irgwc=1`}/>
  <Card image={`https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/f1aa4077cca1_w240.webp`} text={`Learn game development fundamentals with CS50's Introduction to Game Development, covering game design, programming, and mechanics using popular frameworks and tools.`} title={`CS50's Introduction to Game Development`}
  link={`https://www.edx.org/course/cs50s-introduction-to-game-development?irclickid=SXmWBFS8vxyNTLITA1zGq32DUkASO5W0Z2U9yE0&utm_source=affiliate&utm_medium=Class%20Central&utm_campaign=Harvard%27s%20Computer%20Science%20for%20Python%20Programming_&utm_content=TEXT_LINK&irgwc=1`}/>
  
  </div>
  </section>
  <section>
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Microsoft  Certifications and Badges</span></h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Microsoft offers thousands of modules and hundreds of learning paths to explore the company’s products, including Office 365, Visual Studio, and Azure. Once you finish a course, you’ll get a badge on your learner profile..</p>

            </div>
            </div>
      </section>
      <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <Card title={`AZ-104: Configure and manage virtual networks for Azure administrators`} image={`https://ccweb.imgix.net/https%3A%2F%2Fd3f1iyfxxz8i1e.cloudfront.net%2Fcourses%2Fcourse_image%2Fd935778c9e14.svg?ar=16%3A9&auto=format&cs=strip&fit=crop&h=380&ixlib=php-4.1.0&w=535&s=9148d1d9c8f81ef3ce17551a088961b9`} text={`In this course, Azure administrators learn how to configure and manage virtual networks, enabling them to establish secure and efficient network infrastructure within the Azure ecosystem. Gain the skills needed to optimize network connectivity, implement network security measures, and ensure smooth communication between resources in Azure.`} link={`https://learn.microsoft.com/en-us/training/paths/az-104-manage-virtual-networks/`}/>
      <Card title={`Microsoft Dynamics 365 Fundamentals (CRM): Explore Dynamics 365 Marketing`} image={`https://ccweb.imgix.net/https%3A%2F%2Fd3f1iyfxxz8i1e.cloudfront.net%2Fcourses%2Fcourse_image%2F41405d314f5a.svg?ar=16%3A9&auto=format&cs=strip&fit=crop&h=380&ixlib=php-4.1.0&w=535&s=a6f6651bcc1470ada7ec48ce0172d5e1`} text={`
Explore the fundamentals of Microsoft Dynamics 365 Marketing in this comprehensive course, designed to provide an in-depth understanding of the key features and functionalities of Dynamics 365 for marketing purposes.`} 
link={`https://www.classcentral.com/course/microsoft-learn-explore-microsoft-dynamics-365-marketing-62239`}/>
      <Card title={`Create and use analytics reports with Power BI`} image={`https://365solutions.com/wp-content/uploads/2019/06/powerbi-reports-bi.png`} text={`In this comprehensive course on creating and using analytics reports with Power BI, you will learn the fundamentals of Power BI, explore data-gathering techniques, connect to multiple data sources, create customized visuals, configure dashboards, and learn how to publish and share reports with your team or the wider audience`}
      link={`https://learn.microsoft.com/en-us/training/paths/create-use-analytics-reports-power-bi/`}/>
      </div>
      </section>
      <section>
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">IBM Free Certificates</span></h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">IBM’s platform CognitiveClass.ai offers 90 courses and 10 learning paths in data science, AI, big data, cloud computing, and blockchain..</p>

            </div>
            </div>
      </section>
      <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card title={`Deep Learning with TensorFlow`} image={`https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/4a8a20cb6898_w240.webp`} text={`This course on TensorFlow covers the fundamentals of deep learning, including linear and nonlinear regression, logistic regression, activation functions, convolutional neural networks (CNNs) for image processing, recurrent neural networks (RNNs) for sequence data, unsupervised learning techniques such as restricted Boltzmann machines, and the use of autoencoders for feature extraction and data compression`} link={`https://cognitiveclass.ai/courses/course-v1:BigDataUniversity+ML0120EN+v2`}
        />
        <Card title={`Build Swift Mobile Apps with Watson AI Services`} image={`https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/93138da85d3f_w240.webp`}text={`In this short course, you'll learn how to write three mobile apps in Swift on iOS that use the IBM Watson Cloud Developer SDK to access the Watson service. You'll learn how to write those applications by using the following Watson services: - Watson Natural Language Understanding: A collection of APIs that provide text analysis by processing natural language.`}
        link={`https://cognitiveclass.ai/courses/build-swift-mobile-apps-with-watson-ai-services`}/>
        <Card title={`Machine Learning - Dimensionality Reduction`}     image={`https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/41e194bf280b_w240.webp`} text={`Welcome to this machine learning course on Dimensionality Reduction. Dimensionality Reduction is a category of unsupervised machine learning techniques used to reduce the number of features in a dataset. Dimension reduction can also be used to group similar variables together.In this course, you will learn the theory behind dimension reduction, and get some hands-on practice using Principal Components Analysis (PCA) and Exploratory Factor Analysis (EFA) on survey data.`}
        link={`https://cognitiveclass.ai/courses/course-v1:BDU+ML0109EN+v1`}/>
        </div>
        </section>
        <section>
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
              
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">GitLab Free Certificates</span></h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">GitLab, the popular version control website for hosting your repos, also offers free online courses to grow your professional skills.</p>

            </div>
            </div>
      </section>
      <section className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card title={`GitLab 101 Tool Certification`} image={`course.PNG`} text={`Everyone at GitLab needs to know how to use GitLab and be technical to some level. This training is geared toward GitLab team members who are in non-engineering roles (i.e. talent acquisition, peopleops, marketing, finance, etc) and/or have not used a DevOps tool like GitLab before. This can also be helpful for non-engineering people outside of GitLab wanting to learn how to use GitLab for personal projects`}
        link={`https://about.gitlab.com/handbook/people-group/learning-and-development/gitlab-101/`}/>
        <Card title={`GitLab 201 Tool Certification`} image={`https://sdtimes.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-20-at-4.25.04-PM.png`} text={  `This course on GitLab 201 covers essential skills for effective collaboration and project management using GitLab. Learn to create epics, review and provide feedback on merge requests, and create new handbook pages to enhance documentation and knowledge sharing within your organization. Gain practical knowledge to streamline your development workflow and maximize productivity with GitLab.`}
        link={`https://about.gitlab.com/handbook/people-group/learning-and-development/gitlab-201/`}/>
        <Card title={`GitLab All-Remote Certification`} image={`https://cdn.pathfactory.com/assets/10519/thumbnails/343277/71d1e9d2-52e6-49ef-a5c9-cc2cfe6714c6.png`} text={`This certification is ideal for aspiring or new managers, individual contributors, or anyone who is looking to rapidly increase their remote foundational skills and strategic perspective. The certification is also ideal for individuals who prefer to complete training at their own pace through reading comprehension and viewing video.`}
        link={`https://www.classcentral.com/course/independent-gitlab-all-remote-certification-remote-work-foundation-98216`}/>
        </div>
        </section>

    </div>

  )
}
