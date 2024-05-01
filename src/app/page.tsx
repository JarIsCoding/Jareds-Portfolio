'use client'
import useMousePosition from './utils/useMousePosition'

export default function Home() {

  const { x, y } = useMousePosition()

  return (
    <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">

      {/* Radial Graident for spotlight */}
      <div className="absolute inset-0 z-10" style={{ background: `radial-gradient(circle at ${x}px ${y}px, rgba(29, 78, 216, 0.15) 0%, transparent 80%)` }}></div>

      {/* Content here */}
      <div className="grid grid-cols-2 gap-4 z-20 relative h-screen overflow-y-auto scrollbar">
        <div className='ms-40 pt-28 text-start fixed w-[460px]'>

          {/* Name/Title here */}
          <p className='text-white text-[50px] font-bold'>
            Jared Ly
          </p>
          <p className='text-white text-[25px] font-semibold'>
            Web Developer / Fullstack Developer
          </p>

          {/* Description here */}
            <div className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!
            </div>

          {/* Links to my content here */}
          <nav>
            <ul>
              <li>About</li>
              <li>Expierence</li>
              <li>Projects & Other</li>
            </ul>
          </nav>

        </div>

        <div></div>

        <div className=''>

          {/* Text and work here */}
          <div className='pt-32 me-40'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sunt cupiditate vel hic eligendi voluptates eaque iusto! Reiciendis sed cumque eos, blanditiis eveniet maiores ipsa dignissimos recusandae quisquam similique eius?
            Dolorum a error animi in, cumque sapiente! Consectetur suscipit inventore nesciunt quis aperiam perferendis dicta soluta eum veritatis accusantium quibusdam, deserunt mollitia! Expedita alias fugit labore cumque non? Eveniet, laboriosam!
            Earum, totam? Necessitatibus, illo laudantium similique in, soluta mollitia exercitationem consequatur ipsum cum deserunt repellat, vitae dolor ipsam. Voluptate laudantium magni neque dolore exercitationem earum explicabo provident quae odio nihil.
            Architecto aliquid magni odio nesciunt. Tenetur error adipisci recusandae animi deserunt, id placeat necessitatibus ut deleniti assumenda? Mollitia harum fuga explicabo neque possimus asperiores exercitationem sapiente? Adipisci sint et nisi?
            Facilis vel ex enim nihil ab deserunt deleniti. Alias, debitis fugiat veritatis, quibusdam neque ratione nisi minima possimus provident, necessitatibus praesentium vero libero illo perspiciatis. Quaerat excepturi ipsum temporibus autem!
            Asperiores possimus cumque officiis reprehenderit necessitatibus, cupiditate dolores? Recusandae, distinctio suscipit odio ducimus quod quisquam, quas animi id sit reprehenderit aliquam! Dolor, delectus. Expedita maiores explicabo dicta aliquam aperiam quia.
            Corporis, dolorum alias sequi possimus ad optio dolores consequatur magnam atque eius sed, sit cum! Cumque deserunt provident voluptas rerum nulla possimus, sapiente debitis ratione vero suscipit laboriosam dolores dolorem?
            Placeat, consequuntur blanditiis! Explicabo accusamus delectus expedita, soluta optio quia natus nulla excepturi ex assumenda tempore aliquid! Laudantium distinctio dolor aut saepe non sequi repudiandae tempora fugiat sit! Itaque, ex!
            Quas omnis eveniet, libero placeat officia id tempora architecto magnam fugiat nisi quis voluptates possimus velit consequuntur, in magni molestiae accusantium. Deleniti, quis. Illo corporis eum dignissimos dolorem hic inventore?
            Explicabo quam quas dignissimos vero facilis repellat ipsa porro, quis eos facere molestiae maxime voluptatum consequuntur excepturi hic doloremque error fuga, corrupti accusamus, nihil eveniet assumenda. Consectetur at molestiae qui.
            Quas, eveniet voluptatum? Animi, eos. Incidunt sapiente, laboriosam debitis aut dolore odit corporis repudiandae porro optio, eligendi dolorem aliquid, quaerat amet delectus cum nihil. Provident maxime placeat nostrum voluptate odio.
            Illo enim iusto reprehenderit eum optio repudiandae nihil atque, beatae nobis unde impedit fuga dicta blanditiis voluptatibus, voluptas nostrum omnis nisi, quam et aperiam nulla. Libero minus facere sequi quidem?
            Corrupti id voluptas dolores aliquam adipisci quam explicabo quaerat magnam, eius asperiores tenetur reiciendis culpa maxime quos, expedita quod assumenda beatae nemo quasi necessitatibus fugiat blanditiis placeat eaque. Est, omnis!
            Culpa deserunt possimus aperiam eligendi alias! Est ad expedita beatae? Quidem, excepturi! Iusto, natus rerum sit cupiditate vitae eius velit nemo doloremque! Exercitationem expedita quidem fugiat quis quaerat quia laboriosam!
            Cumque fugit expedita unde quidem quod enim aliquam ad repellendus corporis omnis reiciendis, consequatur eveniet velit quibusdam impedit a eius. Voluptatum accusamus nemo error ipsum iure maxime possimus sunt aspernatur.
            Nihil, ratione? Dignissimos voluptates nisi harum odio provident quisquam quae cumque nihil, quas tenetur. Iure numquam vitae magnam, ipsam hic iusto aspernatur quas esse culpa delectus, pariatur architecto necessitatibus nemo?
            Ab quis minus itaque dolore saepe, tenetur natus adipisci, error consequuntur illum quasi voluptate quisquam blanditiis totam eum quo. Aperiam at quisquam similique adipisci in odio exercitationem provident quasi dolorem.
            Cupiditate sint, ab odio temporibus dicta et harum dolorem saepe quia sit hic quo illum deserunt. Incidunt magnam, inventore sunt, quis dolor possimus ut repellat optio deserunt consequatur, dolorem est!
            Sint, rerum hic aliquid quo totam culpa iste cumque? Animi ea ab quia ad et, fugiat at! Quod cupiditate rerum quas architecto tempora saepe officiis, magnam adipisci ducimus explicabo illo.
            Labore alias, qui laborum aliquam mollitia, harum optio unde commodi delectus veniam adipisci atque neque voluptates dolores nam aperiam? Qui, harum. Perspiciatis, velit alias. Inventore quasi animi dicta quaerat rem.
            Alias, corrupti eveniet doloremque atque odio iste animi officiis officia quaerat, rerum ad excepturi dolore eum! Incidunt quod possimus modi, praesentium, dignissimos doloribus porro sapiente neque dolores ut officia quo!
            Omnis eum officia unde dolorem incidunt eius expedita laboriosam facere assumenda, excepturi corrupti ratione ipsa aut ad quibusdam, similique obcaecati earum quos quo? Similique dolorem nostrum id fuga, explicabo architecto?
            Quis eos, adipisci soluta quisquam culpa laborum, magni officiis minima fuga facilis modi dolorem sequi. Ea vitae repudiandae, ut officia esse temporibus rerum, molestias, labore beatae accusantium ducimus maxime soluta!
            Totam, vitae assumenda rerum sed quas, harum et expedita optio facere sit atque aliquam reprehenderit odio magnam voluptatum tenetur? Dolore, sapiente! Consequuntur natus deleniti itaque illum eveniet quod soluta quos.
            Explicabo illum eius facilis commodi nesciunt unde rerum, quae voluptate quibusdam consectetur vel libero fugiat. Quas eligendi tempore esse odit numquam velit ex explicabo, assumenda, a tenetur earum voluptatem facere?
          </div>
        </div>
      </div>
    </div>
  );
}
