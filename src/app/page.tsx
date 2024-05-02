'use client'
import useMousePosition from './utils/useMousePosition'

export default function Home() {

  const { x, y } = useMousePosition()

  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 scroll-smooth">

      {/* Radial Graident for spotlight */}
      <div className="absolute inset-0 z-10" style={{ background: `radial-gradient(circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15) 0%, transparent 80%)` }}></div>

      <div className="flex justify-between gap-4 z-20 mx-40 relative h-screen overflow-y-auto scrollbar">

        <div className='text-start sticky w-1/2 top-0 pt-28'>

          <p className='text-white text-[50px] font-bold leading-snug'>
            Jared Ly
          </p>
          <p className='text-white text-[25px] font-semibold'>
            Web Developer / Fullstack Developer
          </p>

          <div className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!
          </div>

          <nav className='py-30'>
            <ul>
              <a href="#about">
              <li className='active:text-white'>About</li>
              </a>
              <a href="#ex">
              <li className='active:text-white'>Expierence</li>
              </a>
              <a href="#proj">
              <li className='active:text-white'>Projects & Other</li>
              </a>
            </ul>
          </nav>

        </div>

        <div className='w-1/2 mt-28'>

          <div id='about' className=''>
            Hey there! I'm Jared Ly, a junior-level web developer with a passion for crafting immersive online experiences with websites.
            Ever since I wrote my first line of code, I've been captivated by the endless possibilities of web development.
            I thrive on the creative challenge of turning ideas into dynamic, user-friendly websites.
            <br />
            <br />
            My journey into web development began with a curiosity-driven dive into HTML and CSS, and sence I decided to join the Codestack team I've continually expanded my skills across various technologies and frameworks.
            From building responsive layouts to integrating complex functionalities, I'm committed to mastering the tools of the trade to deliver top-notch solutions.
            <br />
            <br />
            What excites me most about web development is its ever-evolving nature.
            In this fast-paced industry, there's always something new to learn, whether it's mastering the latest JavaScript framework or staying updated on best practices for accessibility and performance optimization.
            I embrace this continuous learning process as it fuels my growth as a developer.
            <br />
            <br />
            I'm excited about the opportunity to contribute my skills and enthusiasm to impactful projects and to continue evolving as a web developer.
            Let's connect and build something amazing together!
          </div>
          <div id='ex' className=''>
            Hey there! I'm Jared Ly, a junior-level web developer with a passion for crafting immersive online experiences with websites.
            Ever since I wrote my first line of code, I've been captivated by the endless possibilities of web development.
            I thrive on the creative challenge of turning ideas into dynamic, user-friendly websites.
            <br />
            <br />
            My journey into web development began with a curiosity-driven dive into HTML and CSS, and sence I decided to join the Codestack team I've continually expanded my skills across various technologies and frameworks.
            From building responsive layouts to integrating complex functionalities, I'm committed to mastering the tools of the trade to deliver top-notch solutions.
            <br />
            <br />
            What excites me most about web development is its ever-evolving nature.
            In this fast-paced industry, there's always something new to learn, whether it's mastering the latest JavaScript framework or staying updated on best practices for accessibility and performance optimization.
            I embrace this continuous learning process as it fuels my growth as a developer.
            <br />
            <br />
            I'm excited about the opportunity to contribute my skills and enthusiasm to impactful projects and to continue evolving as a web developer.
            Let's connect and build something amazing together!
          </div>
          <div id='proj' className=''>
            Hey there! I'm Jared Ly, a junior-level web developer with a passion for crafting immersive online experiences with websites.
            Ever since I wrote my first line of code, I've been captivated by the endless possibilities of web development.
            I thrive on the creative challenge of turning ideas into dynamic, user-friendly websites.
            <br />
            <br />
            My journey into web development began with a curiosity-driven dive into HTML and CSS, and sence I decided to join the Codestack team I've continually expanded my skills across various technologies and frameworks.
            From building responsive layouts to integrating complex functionalities, I'm committed to mastering the tools of the trade to deliver top-notch solutions.
            <br />
            <br />
            What excites me most about web development is its ever-evolving nature.
            In this fast-paced industry, there's always something new to learn, whether it's mastering the latest JavaScript framework or staying updated on best practices for accessibility and performance optimization.
            I embrace this continuous learning process as it fuels my growth as a developer.
            <br />
            <br />
            I'm excited about the opportunity to contribute my skills and enthusiasm to impactful projects and to continue evolving as a web developer.
            Let's connect and build something amazing together!
          </div>
        </div>
      </div>
    </div>
  );
}
