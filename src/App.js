import SkillBubble from "./components/SkillBubble";
import ScrollLink from "./components/ScrollLink";
import Pdf from "./static/resume.pdf";

function App() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-2xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-8">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/3 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <div className="min-w-fit p-1">
              <img className="w-28 h-28 rounded-full ring-2 ring-stone-200" src="/ConorHeadshot.png" alt=""/>
            </div>
            <div className="">
                <h1 className="text-4xl font-bold tracking-tight text-stone-200 sm:text-4xl">Conor Lamb</h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-stone-200 sm:text-xl">Customer Success Engineer</h2>
              </div>
            <p className="mt-4 leading-normal">I lead software implementations, provide technical guidance, and build custom interfaces and other cool stuff on the web.</p>
            <nav className="nav hidden lg:block">
              <ul className="mt-16 w-max">
                <li>
                  <ScrollLink to="#about">About</ScrollLink>
                </li>
                <li>
                  <ScrollLink to="#experience">Experience</ScrollLink>
                </li>
              </ul>
            </nav>
          </div>
          <ul className="ml-1 mt-8 flex items-center">
            <li className="mr-5 text-xs">
              <a className="block hover:text-stone-200" href="https://github.com/ConorL11/" target="_blank" rel="noreferrer">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </li>
            <li className="mr-5 text-xs">
              <a className="block hover:text-stone-200" href="https://www.linkedin.com/in/conorlamb11/" target="_blank" rel="noreferrer">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>              
                </svg>
              </a>
            </li>
          </ul>
        </header>
        <main id="content" className="lg:pt-24 lg:w-2/3 pt-8 lg:py-24">
          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-stone-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-stone-200 lg:sr-only">About</h2>
            </div>
            <div>
              <p className="mb-4">While pursuing a degree in Industrial Engineering at Purdue University, I discovered a passion for programming and analytical problem solving. After working a couple of internships in the manufacturing industry, I decided to pursue a career in Tech. Since then I've had the privilege of working for a small business primarily servicing the manufacturing industry, and a rapidly scaling tech startup. Both of these companies have allowed me to combine my soft skills and desire to interract with customers with my technical abilities. In addition to this, I've been able to practice my technical skills by pursuing a number of personal (primarly sports focused) projects.</p>
              <p>When I'm not working or building out side projects, I can be found snowboarding, camping, going to concerts (mostly at Red Rocks), reading sci fi and fantasy novels, or watching way too much college basketball.</p>
            </div>
          </section>
          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-stone-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-stone-200 lg:sr-only">Experience</h2>
            </div>
            <div>
              <ol className="group/list">
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-stone-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-stone-500 sm:col-span-2">
                      2021 - 2023
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-stone-200 mb-4">
                        <div>
                          <a className="inline-flex items-baseline font-medium leading-tight text-stone-200 hover:text-yellow-300 focus-visible:text-yellow-300 group/link text-base" target="_blank" href="https://quantive.com/" rel="noreferrer">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span className="inline-block">
                                 Quantive
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-transtone-y-1 group-hover/link:transtone-x-1 group-focus-visible/link:-transtone-y-1 group-focus-visible/link:transtone-x-1 motion-reduce:transition-none ml-1 transtone-y-px group-hover:translate-x-1 group-hover:-translate-y-1">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                          </a>
                        </div>
                      </h3>
                      <h4 className="font-medium leading-snug text-stone-300">Customer Success Engineer</h4>
                      <p className="mt-2 text-sm leading-normal">Developed interfaces and utilities to address customer needs and to improve Customer Success processes and efficiency.</p>
                      <ul className="mt-2 flex flex-wrap mb-6">
                        <li className="mr-1.5 mt-2">
                          <SkillBubble>Node</SkillBubble>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <SkillBubble>REST APIs</SkillBubble>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <SkillBubble>Git</SkillBubble>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <SkillBubble>BitBucket</SkillBubble>
                        </li>
                      </ul>
                      <h4 className="font-medium leading-snug text-stone-300">Technical Success Manager</h4>
                      <p className="mt-2 text-sm leading-normal">Partnered with Customer Success to lead software Implementations. Assisted customers with integrations, automations, and dashboarding within the Quantive Platform.</p>
                      <ul className="mt-2 flex flex-wrap">
                        <li className="mr-1.5 mt-2">
                          <SkillBubble>SQL</SkillBubble>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <SkillBubble>JavaScript</SkillBubble>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <SkillBubble>Angular</SkillBubble>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <SkillBubble>CSS</SkillBubble>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-stone-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                    </div>
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-stone-500 sm:col-span-2">
                      2018 - 2021
                    </header>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-stone-200 mb-4">
                        <div>
                          <a className="inline-flex items-baseline font-medium leading-tight text-stone-200 hover:text-yellow-300 focus-visible:text-yellow-300 group/link text-base" target="_blank" href="https://www.configureone.com/" rel="noreferrer">
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span className="inline-block">
                                 Configure One (now Revalize)
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-transtone-y-1 group-hover/link:transtone-x-1 group-focus-visible/link:-transtone-y-1 group-focus-visible/link:transtone-x-1 motion-reduce:transition-none ml-1 transtone-y-px group-hover:translate-x-1 group-hover:-translate-y-1">
                                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                </svg>
                              </span>
                          </a>
                        </div>
                      </h3>
                      <h4 className="font-medium leading-snug text-stone-300">Senior Implementation Consultant</h4>
                      <h5 className="font-medium leading-snug text-stone-500">Implementation Consultant</h5>
                      <p className="mt-2 text-sm leading-normal">Coached customers on CPQ best practices, designed CPQ interfaces, and lead trainings to improve sales and engineering processes.</p>
                      <ul className="mt-2 flex flex-wrap mb-6">
                        <li className="mr-1.5 mt-2">
                          <SkillBubble>CPQ</SkillBubble>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <SkillBubble>HTML</SkillBubble>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <SkillBubble>CSS</SkillBubble>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <SkillBubble>SQL</SkillBubble>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <SkillBubble>JavaScript</SkillBubble>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <SkillBubble>User Stories</SkillBubble>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <SkillBubble>UI / UX Design</SkillBubble>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <SkillBubble>NetSuite</SkillBubble>
                        </li>
                        <li className="mr-1.5 mt-2">
                          <SkillBubble>Salesforce</SkillBubble>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ol>
              <div className="mt-12">
                <a href={Pdf} without="true" rel="noopener noreferrer" target="_blank" className="inline-flex items-center font-medium leading-tight text-stone-200 font-semibold text-stone-200 group">
                  <span>
                    <span className="border-b border-transparent pb-px transition group-hover:border-yellow-300 motion-reduce:transition-none">
                      View Full Resume
                      <span className="whitespace-nowrap">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" aria-hidden="true">
                          <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd">
                          </path>
                        </svg>
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </section>
          <footer className="max-w-md pb-16 text-sm text-stone-500 sm:pb-0">
            <p>
              This portfolio website was built with <a target="_blank" rel="noreferrer" href="https://react.dev/" className="text-stone-400">React</a> and <a target="_blank" rel="noreferrer" href="https://tailwindcss.com/" className="text-stone-400">Tailwind CSS</a>, coded using <a target="_blank" rel="noreferrer" href="https://code.visualstudio.com/" className="text-stone-400">Visual Studio Code</a>, and deployed with <a target="_blank" rel="noreferrer" href="https://vercel.com/" className="text-stone-400">Vercel</a>.    
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
