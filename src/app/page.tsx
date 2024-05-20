'use client'

import useMousePosition from './utils/useMousePosition'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import smc from '@/app/assets/SMCpage.png'
import poke from '@/app/assets/PokePic.png'
import short from '@/app/assets/ShortTalkPng.png'
import tip from '@/app/assets/TipCalcPic.png'
import angular from '@/app/assets/angular.png'
import azure from '@/app/assets/azure.png'
import bootstrap from '@/app/assets/bootstrap.png'
import css from '@/app/assets/css.png'
import figma from '@/app/assets/figma.png'
import github from '@/app/assets/github.png'
import html from '@/app/assets/html.png'
import js from '@/app/assets/javascript.png'
import next from '@/app/assets/next.png'
import react from '@/app/assets/react.png'
import tail from '@/app/assets/tail.png'
import typescript from '@/app/assets/typescript.png'
import unity from '@/app/assets/unity.png'
import moon from '@/app/assets/moon.png'
import sun from '@/app/assets/sun.png'
import resume from '@/app/assets/resume.png'
import jira from '@/app/assets/jira.png'
import notion from '@/app/assets/notion.png'
import slack from '@/app/assets/slack.png'
import vscode from '@/app/assets/vscode.png'
import swipe from '@/app/assets/swipe.png'

export default function Home() {

  const { x, y } = useMousePosition()
  const [theme, setTheme] = useState<boolean>(true)
  const [isMd, setIsMd] = useState<boolean>(false);

  function isMdScreen(): boolean {
    const mdScreenWidth = 768;

    return window.innerWidth >= mdScreenWidth;
  }

  useEffect(() => {
    function handleResize() {
      setIsMd(isMdScreen());
    }

    setIsMd(isMdScreen());

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`leading-relaxed antialiased selection:bg-teal-300 selection:text-teal-900 ${theme ? 'bg-slate-900 text-slate-400 ' : 'bg-[#FCF5E5] text-slate-500'}`}>

      {/* Radial Graident for spotlight */}
      <div className="absolute inset-0 z-10" style={{ background: `radial-gradient(circle at ${x}px ${y}px, rgba(${theme ? '29, 78, 216, 0.15' : '224, 212, 185, .7'}) 0%, transparent 80%)` }}></div>
      <div className='absolute top-3 right-3 z-30'>
        <div className={`${theme ? 'block' : 'hidden'}`} onClick={() => { setTheme(false); console.log('switch to light') }}>
          <Image src={moon} alt="moon" width='50' />
        </div>
        <div className={`${theme ? 'hidden' : 'block'}`} onClick={() => { setTheme(true); console.log('switch to dark') }}>
          <Image src={sun} alt="sun" width='50' />
        </div>
      </div>

      <div className="lg:flex lg:justify-between gap-2 z-20 lg:ps-20 lg:pe-20 sm:px-10 px-4 relative h-screen overflow-y-auto scrollbar">

        <div className='text-start lg:sticky lg:w-1/3 top-0 lg:pt-20 pt-14'>

          <p className={`text-[50px] font-bold leading-snug ${theme ? 'text-white' : 'text-black'}`}>
            Jared Ly
          </p>
          <p className={`text-[20px] font-semibold ${theme ? 'text-white' : 'text-black'}`}>
            Web Developer / Fullstack Developer
          </p>

          <div className='py-5 pe-5'>
            I{"'"}m a web dev who mostly works in FrontEnd developement and occasionally Backend. <br /> Im always up for a challenge, Lets connect!
          </div>

          <div>
            <nav className='py-20'>
              <ul className={`font-[20px] ${theme ? '' : 'text-black'}`}>
                <a href="#about">
                  <li className='active:text-white'>About</li>
                </a>
                <a href="#skills">
                  <li className='active:text-white'>Skills</li>
                </a>                
                <a href="#projects">
                  <li className='active:text-white'>Projects & Other</li>
                </a>
                <a href="#certifs">
                  <li className='active:text-white'>Certificates</li>
                </a>

              </ul>
            </nav>

            <div className='w-1/2'>
              <div>
                <p className={`font-bold ${theme ? 'text-white' : 'text-black'}`}>
                  Email
                </p>
                <a href="mailto:jaredlybusiness@gmail.com">
                  <p className='underline'>
                    Jaredlybusiness@gmail.com
                  </p>
                </a>
                <p className={`font-bold ${theme ? 'text-white' : 'text-black'}`}>
                  Phone
                </p>
                <p>
                  (209) 598-0217
                </p>
              </div>
            </div>

            <div className='flex justify-between w-[100px] pt-6'>
              <a href="https://github.com/JarIsCoding" target='_blank' aria-label='Read more about Github'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/in/jared-ly-6b2b272b9/" target='_blank' aria-label='Read more about LinkedIn'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
              </a>
              <a href="https://publuu.com/flip-book/493281/1107445" target='_blank' aria-label='Read more about Resume'>
                <Image src={resume} alt="resume" width='24' />
              </a>
            </div>
          </div>

        </div>

        <div className='lg:w-2/3'>

          <div id='about' className='lg:pt-28 pt-10'>
            <p className={`text-[20px] font-bold ${theme ? 'text-white' : 'text-black'}`}>
              About Me!
            </p>
            <div className='ps-3'>
              Hey there! I{"'"}m Jared Ly, a passionate web developer that crafts immersive online experiences with websites.
              Through out my journey, I{"'"}ve been captivated by the endless possibilities of web development.
              I thrive on the creative challenge of turning ideas into dynamic, user-friendly websites.
              <br />
              <br />
              My journey into web development began with a curiosity-driven dive into HTML and CSS, and since I decided to join the Codestack academy I{"'"}ve continually expanded my skills across various technologies and frameworks.
              From building responsive layouts to integrating complex functionalities, I{"'"}m committed to mastering the tools of the trade to deliver top-notch solutions.
              <br />
              <br />
              What excites me most about web development is its ever-evolving nature.
              In this fast-paced industry, there{"'"}s always something new to learn, whether it{"'"}s mastering the latest JavaScript framework or staying updated on best practices for accessibility and performance optimization, I embrace this continuous learning process as it fuels my growth as a developer.
              <br />
              <br />
              I{"'"}m excited about the opportunity to contribute my skills and enthusiasm to impactful projects and to continue evolving as a web developer.
              Let{"'"}s build something amazing together!
            </div>
          </div>

          <br />

          <div id='skills'>
            <p className={`text-[20px] font-bold ${theme ? 'text-white' : 'text-black'}`}>
              Skills
            </p>
            <div className='grid grid-cols-2'>

              <div className=''>

                {/* Start Langs */}
                <p className='text-white'>Languages</p>
                <div className='grid sm:grid-cols-4 grid-cols-3 pb-4'>
                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={html} width='45' alt='HTML Icon' />
                    </div>
                    <p className='text-center'>
                      Html
                    </p>
                  </div>

                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={css} width='45' alt='CSS Icon ' />
                    </div>
                    <p className='text-center'>
                      CSS
                    </p>
                  </div>

                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={js} width='45' alt='JavaScript Icon' />
                    </div>
                    <p className='text-center'>
                      JavaScript
                    </p>
                  </div>

                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={typescript} width='45' alt='Typescript Icon' />
                    </div>
                    <p className='text-center'>
                      TypeScript
                    </p>
                  </div>

                </div>

                {/* Start Frameworks */}
                <p className='text-white'>Frameworks</p>
                <div className='grid sm:grid-cols-4 grid-cols-3 pb-4'>
                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={bootstrap} width='45' alt='Bootstrap CSS Logo' />
                    </div>
                    <p className='text-center'>
                      Bootstrap
                    </p>
                  </div>

                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={tail} width='45' alt='Tailwind CSS Logo' />
                    </div>
                    <p className='text-center'>
                      TailwindCSS
                    </p>
                  </div>

                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={next} width='45' alt='Next JavaScript Icon' />
                    </div>
                    <p className='text-center'>
                      NextJS
                    </p>
                  </div>
                </div>

              </div>

              <div className=''>

                {/* Start Productivity */}
                <p className='text-white'>Productivity</p>
                <div className='grid sm:grid-cols-4 grid-cols-3 pb-4'>
                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={figma} width='45' alt='Figma Logo' />
                    </div>
                    <p className='text-center'>
                      Figma
                    </p>
                  </div>

                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={azure} width='45' alt='Azure Web Services Logo' />
                    </div>
                    <p className='text-center'>
                      Azure
                    </p>
                  </div>

                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={github} width='45' alt='Github Logo' />
                    </div>
                    <p className='text-center'>
                      Github
                    </p>
                  </div>

                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={angular} width='45' alt='Angular Icon' />
                    </div>
                    <p className='text-center'>
                      Angular
                    </p>
                  </div>

                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={slack} width='45' alt='Slack Logo' />
                    </div>
                    <p className='text-center'>
                      Slack
                    </p>
                  </div>

                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={notion} width='45' alt='Notion Logo' />
                    </div>
                    <p className='text-center'>
                      Notion
                    </p>
                  </div>

                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={jira} width='45' alt='Jira Logo' />
                    </div>
                    <p className='text-center'>
                      Jira
                    </p>
                  </div>

                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={vscode} width='45' alt='Visual Studio Code Logo' />
                    </div>
                    <p className='text-center'>
                      VsCode
                    </p>
                  </div>
                </div>

                {/* Start Libraries */}
                <p className='text-white'>Libraries</p>
                <div className='grid sm:grid-cols-4 grid-cols-3 pb-4'>
                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={react} width='45' alt='React JavaScript Icon' />
                    </div>
                    <p className='text-center'>
                      ReactJS
                    </p>
                  </div>

                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={unity} width='45' alt='Unity Logo' />
                    </div>
                    <p className='text-center'>
                      Unity
                    </p>
                  </div>

                  <div className='w-[85px]'>
                    <div className='flex justify-center'>
                      <Image src={swipe} width='45' alt='swiping image' />
                    </div>
                    <p className='text-center leading-tight pt-1'>
                      React Swipeable
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div id='projects' className='pt-4'>
            <p className={`text-[20px] font-bold ${theme ? 'text-white' : 'text-black'}`}>
              My Projects
            </p>
            <div className=''>

              <a href="https://shortalk-front-end.vercel.app/" target='_blank' className={`${theme ? 'rotateHover' : 'rotateHoverLight'}`}>
                <div className='sm:flex sm:justify-between items-center py-4 px-2'>
                  <div className={`${theme ? 'bg-teal-400/30' : 'bg-[#E49070]/30'} p-2 rounded-md sm:w-1/3`}>
                    <Image src={short} alt="Short Talk Game" />
                  </div>
                  <div className='ps-2 sm:w-2/3'>
                    <p className={`${theme ? 'text-white' : 'text-black'}`}>
                      ShorTalk
                    </p>
                    <div>
                      A fullstack group project, consisitng of JosephP, XavierH, and myself. Made in the Next.js framework based on the game Poetry for Neanderthals.

                    </div>
                    <div className='flex justify-start gap-3 py-3 overflow-x-auto scrollbar'>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>NextJS</div>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>TypeScript</div>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>Figma</div>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>FullStack</div>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>Tailwind</div>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>GroupProject</div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://j-ly-tip-calculator.vercel.app/" target='_blank' className={`${theme ? 'rotateHover' : 'rotateHoverLight'}`}>
                <div className='sm:flex sm:justify-between items-center py-4 px-2'>
                  <div className={`${theme ? 'bg-teal-400/30' : 'bg-[#E49070]/30'} p-2 rounded-md sm:w-1/3`}>
                    <Image src={tip} alt="Tip Calculator" />
                  </div>
                  <div className='ps-2 sm:w-2/3'>
                    <p className={`${theme ? 'text-white' : 'text-black'}`}>
                      Tip Calculator
                    </p>
                    <div>
                      A simple calculator that outputs a tip amount for each person based on the cost and amount of people.
                    </div>
                    <div className='flex justify-start gap-3 py-3 overflow-x-auto scrollbar'>
                      <div className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'}`}>NextJS</div>
                      <div className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'}`}>TypeScript</div>
                      <div className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'}`}>FrontEndMentor</div>
                      <div className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'}`}>CSS</div>
                      <div className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'}`}>Tailwind</div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://pokemontype.vercel.app/" target='_blank' className={`${theme ? 'rotateHover' : 'rotateHoverLight'}`}>
                <div className='sm:flex sm:justify-between items-center py-4 px-2'>
                  <div className={`${theme ? 'bg-teal-400/30' : 'bg-[#E49070]/30'} p-2 rounded-md sm:w-1/3`}>
                    <Image src={poke} alt="Pokemon Api Website" />
                  </div>
                  <div className='ps-2 sm:w-2/3'>
                    <p className={`${theme ? 'text-white' : 'text-black'}`}>
                      Pokemon API
                    </p>
                    <div>
                      A project using the Pokemon API V2, which provides a wide range of information about various pokemon.
                    </div>
                    <div className='flex justify-start gap-3 py-3 overflow-x-auto scrollbar'>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>ReactJS</div>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>TypeScript</div>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>Figma</div>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>PokemonApiV2</div>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>Tailwind</div>
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://jar-jen-steamymugcafe.vercel.app/" target='_blank' className={`${theme ? 'rotateHover' : 'rotateHoverLight'}`}>
                <div className='sm:flex sm:justify-evenly items-center py-4 px-2'>
                  <div className={`${theme ? 'bg-teal-400/30' : 'bg-[#E49070]/30'} p-2 rounded-md sm:w-1/3`}>
                    <Image src={smc} alt="Steamy Mug Cafe" />
                  </div>
                  <div className='ps-2 sm:w-2/3'>
                    <p className={`${theme ? 'text-white' : 'text-black'}`}>
                      Steamy Mug Cafe
                    </p>
                    <div>
                      A website made for my friends and I, based on a coffee API. Designed in figma and created for fun. Still in Progress.
                    </div>
                    <div className='flex justify-start gap-3 py-3 overflow-x-auto scrollbar'>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>JavaScript</div>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>HTML</div>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>CSS</div>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>Api</div>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>Figma</div>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>WIP</div>
                      <div className={`flex items-center rounded-full ${theme ? 'bg-teal-400/10 text-teal-300' : 'bg-[#E49070]/20 text-[#C67657]'} px-3 py-1 text-xs font-medium leading-5`}>Bootstrap</div>
                    </div>
                  </div>
                </div>
              </a>

            </div>
            <p className=''>
              Wanna see all of my projects? Check out my <a href="https://github.com/JarIsCoding" target='_blank'><span className={`font-bold ${theme ? 'text-white' : 'text-black'}`}>Github</span></a>!
            </p>

            <div id='certifs' className='pt-8'>
              <p className={`text-[20px] font-bold ${theme ? 'text-white' : 'text-black'}`}>
                My Certificates
              </p>
              <p>
                Here are some of my <span className={`${theme ? 'text-white' : 'text-black'}`}>certificates</span> that I{"'"}ve obtained, Check them out!
              </p>
              {/* need to figure out how to put pdf links here */}
              <div className='grid col-span-1 py-5 ps-3'>
                <div className='md:flex md:justify-between'>
                  <div>
                    <p className={`font-bold ${theme ? 'text-white' : 'text-black'}`}>
                      CodeAcademy
                    </p>
                    <a href=""><p className={`${theme ? 'text-white' : 'text-black'}`}>- Learn C#</p></a>
                    <a href=""><p className={`${theme ? 'text-white' : 'text-black'}`}>- Learn HTML</p></a>
                    <a href=""><p className={`${theme ? 'text-white' : 'text-black'}`}>- Learn CSS</p></a>
                    <a href=""><p className={`${theme ? 'text-white' : 'text-black'}`}>- Learn JavaScript</p></a>
                    <a href=""><p className={`${theme ? 'text-white' : 'text-black'}`}>- Learn Intermediate JavaScript</p></a>
                    <a href=""><p className={`${theme ? 'text-white' : 'text-black'}`}>- Learn React JavaScript</p></a>
                    <a href=""><p className={`${theme ? 'text-white' : 'text-black'}`}>- Learn TypeScript</p></a>
                  </div>

                  <div className='md:text-end md:pt-0 pt-5'>
                    <p className={`font-bold ${theme ? 'text-white' : 'text-black'}`}>
                      Cisco
                    </p>
                    <a href=""><p className={`${theme ? 'text-white' : 'text-black'}`}>{isMd ? 'Learn Computer Repair -' : '- Learn Computer Repair'}</p></a>
                    <a href=""><p className={`${theme ? 'text-white' : 'text-black'}`}>{isMd ? 'Learn Cyber Security -' : '- Learn Cyber Security'}</p></a>
                    <a href=""><p className={`${theme ? 'text-white' : 'text-black'}`}>{isMd ? 'Learn IT Essentials -' : '- Learn IT Essentials'}</p></a>
                  </div>

                </div>

                <a href="https://publuu.com/flip-book/493281/1107445" target='_blank' className='pt-3 font-bold'>
                  <div>
                    More information in my <span className={`${theme ? 'text-white' : 'text-black'}`}>resume.</span>
                  </div>
                </a>
              </div>
            </div>

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
