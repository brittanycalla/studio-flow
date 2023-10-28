import { Link } from "react-router-dom"
import logo from "../logo.svg"
import rightArrow from "../right-arrow.svg"
import ShotAnimation from "../components/ShotAnimation"

function Landing() {
  // const { user } = useOutletContext()
  // const navigate = useNavigate()
  // if (user) {
  //   navigate("/app")
  // }

  return (
    <>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
      <header className="h-[7vh] flex justify-start items-center w-full px-8 pt-4 mx-auto max-w-5xl lg:px-16">
        <Link to='/' className="flex gap-2" id="logo">
          <img src={logo} className="hover:animate-spin" alt="studioflow logo" />
          <span className="text-xl font-bold tracking-wider">studio flow</span>
        </Link>
      </header>

      <section>
        <div className="flex flex-col max-w-5xl px-8 py-4 mx-auto lg:px-16">
          <div className="flex flex-col items-start" id="about">
            <h1 className="mt-5 text-3xl font-bold leading-none tracking-tight whitespace-pre-wrap md:text-5xl md:mt-8">
              Elevate your <span className="whitespace-nowrap">e-commerce</span> photography workflow.
            </h1>
            <p className="mt-4 text-gray-600 md:text-lg lg:text-xl">
              Seamless tracking, effortless shoots, impeccable results.
            </p>
            <a href="/signup" type="button" className="mt-8 appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-2xl cursor-pointer">
              <span className="w-full font-semibold text-white">Get Started</span>
              <img width="20px" height="20px" alt="" src={rightArrow} className="ml-2" />
            </a>
          </div>

          <ShotAnimation />

        </div>
      </section>

      <section>
        <div className="flex flex-col max-w-5xl pt-16 mx-auto">
          <div className="px-8 text-lg font-semibold lg:px-16 text-violet-500 md:text-xl">track</div>
          <div className="flex flex-col px-8 lg:px-16" id="about">
            <h1 className="mt-5 text-3xl font-bold leading-none tracking-tight md:text-5xl md:mt-8">
              Simplified shoot management.
            </h1>
            <p className="mt-4 text-gray-600 md:text-lg lg:text-xl">
              From the newest arrivals to the classics, manage all your product shoots with pinpoint accuracy.
            </p>
          </div>
          <div className="mx-auto">
          <img
              src="/assets/studio-flow-mobile-demo-dashboard.png"
              alt="A screenshot of studio flow's dashboard on an iPhone"
              className="block md:hidden"
            />
            <img
              src="/assets/studio-flow-desktop-demo-dashboard.png"
              alt="A screenshot of studio flow's dashboard on a Mac"
              className="hidden md:block"
            />
          </div>
        </div>
      </section>
    
      <div className="w-full h-px bg-gray-200"></div>

      <section>
        <div className="overflow-hidden">
          <div>
            <div className="max-w-5xl px-8 py-16 mx-auto lg:px-16">
              <div className="flex flex-col items-center md:justify-between md:flex-row md:space-x-10">
                <div className="max-w-xl space-y-4">
                  <div className="space-y-3">
                    <h2 className="text-lg font-bold text-black md:text-xl">Redefine Your Studio's Efficiency</h2>
                      <p className="text-base font-medium text-gray-500 md:text-lg lg:text-xl">Leave the complexities of spreadsheets behind. Embrace a tool that's designed for the fast-paced, high-volume demands of e-commerce photography. Refine your workflow, reclaim your time, and let your products shine.</p>
                  </div>
                  <a href="/signup" className="inline-flex items-center text-gray-700 group hover:text-gray-900">
                    <span className="w-full text-base font-medium">get started now</span>
                    <img width="20px" height="20px" alt="" src={rightArrow} className="ml-2 invert" />
                  </a>
                </div>
                <div className="pointer-events-none">
                  <img alt="A grid of studio photography examples" className="object-contain mt-10 mb-[-15%] md:ml-[40%] md:mb-[-20%] md:mt-[-20%] md:max-w-[400px] md:rotate-[15deg]" src="/assets/examples.png" loading="lazy"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gray-200"></div>

      <section>
        <div className="flex flex-col max-w-5xl pt-16 mx-auto">
          <div className="px-8 text-lg font-semibold lg:px-16 text-violet-500 md:text-xl">sync</div>
          <div className="flex flex-col px-8 lg:px-16" id="about">
            <h1 className="mt-5 text-3xl font-bold leading-none tracking-tight md:text-5xl md:mt-8">
              Direct item-to-shoot linking.
            </h1>
            <p className="mt-4 text-gray-600 md:text-lg lg:text-xl">
              Assign specific products to their designated shoots. Ensure nothing gets missed in the e-commerce rush.
            </p>
          </div>
          <div className="mx-auto">
            <img
              src="/assets/studio-flow-mobile-demo-shoot-details.png"
              alt="A screenshot of studio flow's shoot details page on an iPhone"
              className="block md:hidden"
            />
            <img
              src="/assets/studio-flow-desktop-demo-shoot-details.png"
              alt="A screenshot of studio flow's shoot details page on a Mac"
              className="hidden md:block"
            />
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gray-200"></div>      

      <section>
        <div className="flex flex-col max-w-5xl pt-16 mx-auto">
          <div className="px-8 text-lg font-semibold lg:px-16 text-violet-500 md:text-xl">mobile</div>
          <div className="flex flex-col px-8 lg:px-16">
            <h1 className="mt-5 text-3xl font-bold leading-none tracking-tight md:text-5xl md:mt-8">
            Across all screens, always in sync.
            </h1>
            <p className="mt-4 text-gray-600 md:text-lg lg:text-xl">
              Accessible on both desktop and mobile, our platform ensures you stay on top of your shoots, whether you're at the desk or on the move.
            </p>
          </div>
          <div className="flex justify-center max-w-full mx-auto">
            <img
              src="/assets/studio-flow-mobile-demo-dashboard.png"
              alt="A screenshot of studio flow's dashboard on an iPhone"
              className="hidden w-1/2 md:block mr-[-5%]"
            />
            <img
              src="/assets/studio-flow-mobile-demo-shoot-details.png"
              alt="A screenshot of studio flow's dashboard on an iPhone"
              className="hidden w-1/2 md:block ml-[-5%]"
            />
            <img
              src="/assets/studio-flow-desktop-demo-dashboard.png"
              alt="A screenshot of studio flow's dashboard on a Mac"
              className="block md:hidden"
            />
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gray-200"></div>

      <section className="max-w-5xl px-8 py-16 mx-auto space-y-16 lg:px-16">
        <div className="space-y-14">
          <img src={logo} className="hover:animate-spin" width="70px" height="70px" alt="studioflow logo" />
          <div className="space-y-5">
            <h3 className="text-[26px] leading-[32px] sm:text-3xl md:text-5xl md:leading-[55px] font-bold text-black">An essential tool for essentially any team.</h3>
            <p className="text-base font-medium text-gray-500 md:text-lg lg:text-xl">Leave spreadsheet struggles in the past. Step into a future of seamless organization and undivided creative attention.</p>
          </div>
        </div>
        <a href="/signup" type="button" className="appearance-none inline-flex hover:shadow-2xl transition-all duration-300 hover:scale-105 items-center group space-x-2.5 bg-black text-white py-4 px-5 rounded-2xl cursor-pointer">
          <span className="w-full font-semibold text-white">Get Started</span>
          <img width="20px" height="20px" alt="" src={rightArrow} className="ml-2" />
        </a>
      </section>

      <div className="w-full h-px bg-gray-200"></div>

      <footer className="max-w-5xl px-8 mx-auto lg:px-16">
        <div className="container py-6 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="mailto:brittany@brittanycallahan.com" className="text-gray-900 hover:text-gray-800">
              <span className="sr-only">Contact Us</span><svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"></path></svg>
            </a>
            <a href="https://github.com/brittanycalla/studio-flow" className="text-gray-900 hover:text-gray-800">
              <span className="sr-only">GitHub</span><svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
            </a>
          </div>
          <p className="mt-8 text-base text-gray-900 md:mt-0 md:order-1">© 2023 studio flow. All rights reserved.</p>
        </div>
      </footer>

    </>
  );
}

export default Landing;
