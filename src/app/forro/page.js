export default function Home() {
  return (
    <main className="bg-black flex flex-col">
      <div className="w-11/12 mx-auto p-8">
        <h1 className="logo">
          Bienvenidos a mi primer pagina web
        </h1>
        <div className="flex flex-row items-center justify-center mt-4">
        </div>
        <h2 className="m-3 text-2xl text-purple-500">Como aprender a usar javascript Esencial :</h2>
        <ol className="list-decimal">
          <li>Lo primero que tenemos que hacer es instalar tailwindcss o mejor js</li>
          <li>Tenes que ir a la pagina:<a className="text-red-500" href="https://tailwindcss.com/docs/installation"> Toca acá</a></li>
          <li className="pt-2">
          <div className="mockup-code w-4">
            <pre data-prefix="$"><code>npm install -D tailwindcss</code></pre>
            <pre data-prefix="$"><code>npx tailwindcss init</code></pre>
          </div>
          </li>
          <li className="pt-2">
          <div className="mockup-code w-10">
            <pre data-prefix="$"><code>/** @type {import('tailwindcss').Config} */module.exports = </code></pre>
            <pre data-prefix="$"><code>content: ["./src/**/*.  html,js "],</code></pre>
            <pre data-prefix="$"><code>theme: </code></pre>
            <pre data-prefix="$"><code>extend:</code></pre>
            <pre data-prefix="$"><code>plugins:</code></pre>
          </div>
          </li>
          <li>Una vez instalado lo unico que te queda por hacer es ser felíz.</li>
        </ol>
      </div>
    </main>
  )
}
