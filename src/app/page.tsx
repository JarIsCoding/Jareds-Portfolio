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

          <div className='py-5'>
            I{"'"}m a web dev who mostly works in FrontEnd developement and occasionally Backend. Im always up for a challenge, Lets connect!
          </div>

          <nav className='pt-20'>
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

        <div className='w-1/2'>

          <div id='about' className='mt-28'>
            Hey there! I{"'"}m Jared Ly, a junior-level web developer with a passion for crafting immersive online experiences with websites.
            Ever since I wrote my first line of code, I{"'"}ve been captivated by the endless possibilities of web development.
            I thrive on the creative challenge of turning ideas into dynamic, user-friendly websites.
            <br />
            <br />
            My journey into web development began with a curiosity-driven dive into HTML and CSS, and sence I decided to join the Codestack academy I{"'"}ve continually expanded my skills across various technologies and frameworks.
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

          <br />

          <div id='ex' className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatem ut exercitationem modi sed dignissimos ex natus alias placeat magni. Libero autem nisi nostrum. Inventore mollitia consectetur labore distinctio sit.
            Aliquam vel sed autem eligendi distinctio dolorem voluptatum aspernatur earum quos perspiciatis consequuntur, iure corporis odit impedit, dolores, ab quasi reprehenderit eaque recusandae nisi labore commodi magnam veritatis nam? Nostrum.
            Quibusdam error fugit atque earum cum maiores ipsa voluptas temporibus est perferendis voluptatibus saepe aliquam accusamus esse ut dolorum possimus et, aperiam, optio aut omnis debitis? Porro vel animi quaerat!
            Non quod perferendis assumenda nam iure nesciunt numquam optio enim sunt sit doloremque, placeat et magnam! Ratione modi veritatis aliquam reiciendis consectetur officia, voluptas nesciunt cum vel assumenda sequi inventore.
            Aut, velit ab explicabo blanditiis voluptate dolorem expedita reiciendis. Nam ab incidunt repellendus nihil excepturi accusamus ut, quibusdam sit vel aliquid ullam odio, esse architecto, quas eveniet? Eligendi, consequuntur sunt!
            Dolorum odit porro libero itaque voluptas natus id ipsum iste aut praesentium qui nam quidem similique magnam illo tenetur doloremque non, tempora eligendi! Ex ut ullam rem earum voluptatibus nesciunt.
            Recusandae praesentium ipsam debitis neque fugiat qui vitae porro. Nesciunt aut excepturi sapiente modi ad quos temporibus alias quisquam eius vel earum hic nulla quo, consequatur ex, quia, quod inventore!
            Et perspiciatis deserunt, possimus repellendus, est sint, veniam neque magni dicta vel hic. Est ad fugit ut nulla aliquam quidem recusandae, animi minus iusto aut earum dolorum voluptatem reprehenderit rem.
            Expedita veritatis id recusandae vitae, asperiores, enim nam quae eius nemo saepe, necessitatibus amet? Maiores ipsum modi facere necessitatibus iure architecto sed, illum natus similique culpa molestias voluptatum, itaque dicta.
            Unde provident cupiditate laudantium. Perspiciatis quo mollitia at aperiam libero quis tenetur corrupti culpa? Quod dolorum est culpa, molestias dolores, aliquam explicabo doloremque iusto id distinctio neque numquam, expedita aspernatur.
          </div>

          <div id='proj' className=''>
            links here
          </div>
        </div>
      </div>
    </div>
  );
}
