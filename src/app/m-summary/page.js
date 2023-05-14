import Image from 'next/image';

export default function Home() {
    return (
      <main className="bg-black flex flex-col">
        <div className="w-5/12 mx-auto p-8 bg-blue-700 ">
            <section className="flex flex-row">
              <div className="sheet1 bg-blue-800 flex flex-col">
                <h2 className=" text-gray-500 text-center p-6">Your Result</h2>
                <span className="big-number text-6xl p-2 text-center">76<br/></span>
                <span className="number text-gray-400 text-xs text-center">of 100<br/></span>
                <span className="great m-10 text-center">Great<br/></span>
                <span className="text-gray-500 letra-chica text-center">You scored higher than 65% of the people who have taken these tests.</span>
              </div>
              <div className="sheet2 bg-slate-300">
                <h2 className="float-left text-center text-zinc-950 p-6">Summary</h2>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><button class="rounded-full bg-black px-10 py-2 m-10">Continue</button>
              </div>
            </section>
            <Image
              src="/results-summary-component-main/assets/images/favicon-32x32.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            {/*<img src="results-summary-component-main/assets/images/icon-visual.svg" />*/}
        </div>
      </main>
    )
  }
  