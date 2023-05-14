export default function Home() {
  return (
    <main className="bg-black flex flex-col">
      <div className="w-11/12 mx-auto p-8">
        <ol className='float-right'>
          <li>Twitter <a href="https://twitter.com/blogos47">@blogos47</a></li>
          <li>Twitch: <a href="https://twitch.tv/blogos47">@blogos47</a></li>
          <li>IG: <a href="https://www.instagram.com/blogos47">@blogos47</a></li>
          <li>Github: <a href="https://github.com/blogos47">@blogos47</a></li>
        </ol>
        <h1 className="
        text-center
        font-extrabold
        text-transparent
        text-3xl
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        xl:text-8xl 
        bg-clip-text
        bg-gradient-to-r
        from-purple-950
        to-pink-100
        pt-1 underline
        decoration-pink-300 decoration-4">
          Full Stack Developer
        </h1>
        <details>
          <summary>Stack LAMP</summary>
          <p>LAMP (Linux, Apache, MySQL, PHP)</p>
        </details>
        
        Stack B: <br/>
        NextJS, ReactJS, TailwindCSS <br/>

        <div className="flex flex-row items-center justify-center mt-4">
          <a className="underline decoration-orange-600 decoration-dashed decoration-4 hover:w hover:bg-orange-700 active:bg-orange-700 focus:outline-none focus:ring focus:ring-violet-500 rounded p-1 m-1">
            HTML
          </a>,
          <button className="
          underline
          decoration-yellow-400
          decoration-dashed
          hover:bg-blue-600
          focus:outline-none
          decoration-4
          focus:ring
          focus:ring-violet-500
          rounded p-1 m-1">
            CSS
          </button>,
          <button className="
            underline
            decoration-dotted
            decoration-4
          hover:bg-yellow-800
          decoration-yellow-400
            focus:outline-none
            focus:ring
          focus:ring-violet-500
            rounded
            p-1 m-1"
          >
            JS
          </button>,
          <button className="
          underline
          decoration-sky-900
          decoration-dashed
          decoration-4
          hover:bg-sky-950
          focus:outline-none
          focus:ring
          focus:ring-violet-500
          rounded p-1 m-1">
            ReactJS
          </button>,
          <button className="
          underline
          decoration-sky-900
          decoration-dashed
          decoration-4
          hover:bg-sky-950
          focus:outline-none
          focus:ring
          focus:ring-violet-500
          rounded p-1 m-1">
            NextJS
          </button>
        </div>
        <h2 className='m-3 text-2xl'>Referencias :</h2>
        <ol className="list-decimal text-3xl py-10">
          <li className='text-xl'>soyhenry.com</li>
          <li className='text-xl'>www.w3schools.com</li>
          <li className='text-xl'>https://css-tricks.com/snippets/css/a-guide-to-flexbox/</li>
          <li className='text-xl'>https://flexboxfroggy.com/#es</li>
        </ol> 


        
      </div>
    </main>
  )
}
