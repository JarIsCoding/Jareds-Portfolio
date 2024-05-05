'use client'

import useMousePosition from './utils/useMousePosition'
import smc from '@/app/assets/Certifs/SMCpage.png'

export default function Home() {

  const { x, y } = useMousePosition()

  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 scroll-smooth">

      {/* Radial Graident for spotlight */}
      <div className="absolute inset-0 z-10" style={{ background: `radial-gradient(circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15) 0%, transparent 80%)` }}></div>

      <div className="lg:flex lg:justify-between gap-4 z-20 lg:mx-40 mx-10 relative h-screen overflow-y-auto scrollbar">

        <div className='text-start lg:sticky lg:w-1/2 top-0 pt-28'>

          <p className='text-white text-[50px] font-bold leading-snug'>
            Jared Ly
          </p>
          <p className='text-white text-[25px] font-semibold'>
            Web Developer / Fullstack Developer
          </p>

          <div className='py-5 w-3/4'>
            I{"'"}m a web dev who mostly works in FrontEnd developement and occasionally Backend. Im always up for a challenge, Lets connect!
          </div>

          <nav className='pt-20'>
            <ul className='text-white font-[20px]'>
              <link rel="stylesheet" href="#about" />
              <a href="#about">
                <li className='active:text-white'>About</li>
              </a>
              <a href="#certifs">
                <li className='active:text-white'>Certificates</li>
              </a>
              <a href="#projects">
                <li className='active:text-white'>Projects & Other</li>
              </a>
            </ul>
          </nav>

          <div className='pt-20 w-1/2'>
            <div>
              <p className='text-white font-bold'>
                Email
              </p>
              <a href="Jaredlybusiness@gmail.com">
                <p>
                  Jaredlybusiness@gmail.com
                </p>
              </a>
              <p className='text-white font-bold'>
                Phone
              </p>
              <p>
                (209) 598-0217
              </p>
            </div>
          </div>
          <div className='flex justify-between w-[60px] pt-20'>
            <a href="https://github.com/JarIsCoding" target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/jared-ly-6b2b272b9/" target='_blank' >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
            </a>
          </div>
        </div>

        <div className='lg:w-1/2'>

          <div id='about' className='pt-28'>
            <p className='text-[20px] text-white font-bold'>
              About Me!
            </p>
            <div className='ps-3'>
              Hey there! I{"'"}m Jared Ly, a junior-level web developer with a passion for crafting immersive online experiences with websites.
              Ever since I wrote my first line of code, I{"'"}ve been captivated by the endless possibilities of web development.
              I thrive on the creative challenge of turning ideas into dynamic, user-friendly websites.
              <br />
              <br />
              My journey into web development began with a curiosity-driven dive into HTML and CSS, and since I decided to join the Codestack academy I{"'"}ve continually expanded my skills across various technologies and frameworks.
              From building responsive layouts to integrating complex functionalities, I{"'"}m committed to mastering the tools of the trade to deliver top-notch solutions.
              <br />
              <br />
              What excites me most about web development is its ever-evolving nature.
              In this fast-paced industry, there{"'"}s always something new to learn, whether it{"'"}s mastering the latest JavaScript framework or staying updated on best practices for accessibility and performance optimization.
              I embrace this continuous learning process as it fuels my growth as a developer.
              <br />
              <br />
              I{"'"}m excited about the opportunity to contribute my skills and enthusiasm to impactful projects and to continue evolving as a web developer.
              Let{"'"}s connect and build something amazing together!
            </div>
          </div>

          <br />

          <div id='skills'>
            <p className='text-[20px] text-white font-bold'>
              Skills
            </p>
            <p>
              Some of my skills include, HTML, CSS, Javascript, Unity, ReactJS, Typescript, Angular, NextJS, Tailwind, Figma, Vercel, Azure Webservices, Bootstrap, Flowbite, and Github Repo.
            </p>
          </div>

          <div id='certifs' className='pt-8'>
            <p className='text-[20px] text-white font-bold'>
              My Certificates
            </p>
            <p>
              Here are some of my <span className='text-white'>certificates</span> that I{"'"}ve obtained, Check them out!
            </p>
            {/* need to figure out how to put pdf links here */}
            <div className='grid col-span-1 py-5 ps-3'>
              <div className='flex justify-between'>
                <div>
                  <p className='text-white font-bold'>
                    CodeAcademy
                  </p>
                  <a href=""><p className='text-white'>- Learn C#</p></a>
                  <a href=""><p className='text-white'>- Learn HTML</p></a>
                  <a href=""><p className='text-white'>- Learn CSS</p></a>
                  <a href=""><p className='text-white'>- Learn JavaScript</p></a>
                  <a href=""><p className='text-white'>- Learn Intermediate JavaScript</p></a>
                  <a href=""><p className='text-white'>- Learn React JavaScript</p></a>
                  <a href=""><p className='text-white'>- Learn TypeScript</p></a>
                </div>

                <div className='text-end'>
                  <p className='text-white font-bold'>
                    Cisco
                  </p>
                  <a href=""><p className='text-white'>Learn Computer Repair -</p></a>
                  <a href=""><p className='text-white'>Learn Cyber Security -</p></a>
                  <a href=""><p className='text-white'>Learn  -</p></a>
                </div>

              </div>

              <a href="https://publuu.com/flip-book/493281/1107445" className='pt-3 font-bold'>
                  <div>
                    More information in my <span className='text-white'>resume</span>
                  </div>
                </a>
            </div>
          </div>

          <div id='projects' className=''>
            <p className='text-[20px] text-white font-bold'>
              My Projects
            </p>
            <div className='ps-3'>

              <a href="https://github.com/JarIsCoding/weather-app-remake" target='_blank'>
                <div className='py-4'>
                  <p className='text-white'>
                    Weather App
                  </p>
                  <div>
                    A simple weather app that uses the OpenWeatherMap API to get current and forecast data.
                  </div>
                  <div className='flex justify-start gap-3 py-3'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>NextJS</div>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>TypeScript</div>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>Figma</div>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>Api</div>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>Tailwind</div>
                  </div>
                </div>
              </a>

              <a href="https://pokemontype.vercel.app/" target='_blank'>
                <div className='py-4'>
                  <p className='text-white'>
                    Pokemon API
                  </p>
                  <div>
                    A project using the Pokemon API V2, which provides a wide range of information about various pokemon.
                  </div>
                  <div className='flex justify-start gap-3 py-3'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>ReactJS</div>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>TypeScript</div>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>Figma</div>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>Pokemon Api V2</div>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>Tailwind</div>
                  </div>
                </div>
              </a>

              <a href="https://jareds-portfolio-three.vercel.app/" target='_blank'>
                <div className='py-4'>
                  <p className='text-white'>
                    Portfolio Website
                  </p>
                  <div>
                    My personal portfolio made with next.js and Tailwind. Shows everything from my projects and other cool stuff about me.
                  </div>
                  <div className='flex justify-start gap-3 py-3'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>NextJS</div>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>TypeScript</div>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>Figma</div>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>Portfolio</div>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>Tailwind</div>
                  </div>
                </div>
              </a>

              <a href="https://jar-jen-steamymugcafe.vercel.app/" target='_blank'>
                <div className='py-4'>
                  <p className='text-white'>
                    Steamy Mug Cafe
                  </p>
                  <div>
                    A website made for my friends and I, based on a coffee API. Designed in figma and created for fun.
                  </div>
                  <div className='flex justify-start gap-3 py-3'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>JavaScript</div>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>HTML</div>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>CSS</div>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>Api</div>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>Figma</div>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300'>WIP</div>
                  </div>
                </div>
                <div>
                  <img src='../app/assets/Certifs/SMCpage.png' alt="" />
                </div>
              </a>

            </div>

            <p className='pb-20'>
              Wanna see all of my projects? Check out my <a href="https://github.com/JarIsCoding" target='_blank'><span className='text-white font-bold'>Github</span></a>!
            </p>

            <div className='text-[12px] text-end pb-10'>
              Thanks for checking out my portfolio! - Jared Ly
              <br />
              Created in Next.js, styled with Tailwind, and deployed on Vercel.
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
