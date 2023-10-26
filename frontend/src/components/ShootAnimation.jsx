import { gsap } from "gsap"
import { useState, useEffect } from "react"

const ShotAnimation = () => {
  const [array, setArray] = useState(["#card5", "#card4", "#card3", "#card2", "#card1"])

  const startAnimation = array => {
    gsap.fromTo(array[4], {opacity: 0, scale: .1, y: -100}, {opacity: 100, scale: 1, y: 0, duration: 0.4, delay: 1})
    gsap.fromTo(array[3], {y: 0}, {y: 115, duration: 0.4, delay: 1})
    gsap.fromTo(array[2], {y: 115}, {y: 230, duration: 0.4, delay: 1})
    gsap.fromTo(array[1], {y: 230}, {y: 345, duration: 0.4, delay: 1})
    gsap.fromTo(array[0], {y: 345}, {y: 460, duration: 0.4, delay: 1})
  }

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      const [first, ...rest] = array
      setArray([...rest, first])
  }, 1400)

    return () => clearInterval(wordTimeout)
  }, [array])

  useEffect(() => {
    startAnimation(array)
  }, [array])

  return (
    <div className="mt-12 rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 h-[400px] md:h-[420px] lg:h-[450px] flex flex-col items-center p-4">
            <div className="relative w-full h-full">

              <div id="card1" className="rounded-[20px] bg-white drop-shadow-xl w-full max-w-[400px]">
                <div className="flex px-5 py-5 space-x-4">
                  <div className="p-2.5 flex flex-col justify-center items-center rounded-[18px] bg-[#F3F4F6] h-14 w-14">
                    <span className="text-xs font-black leading-tight tracking-wider text-center text-black uppercase">June</span>
                    <span className="text-lg font-black leading-none tracking-wider text-center text-black">1</span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="break-all whitespace-pre-wrap">
                      <p className="font-medium tracking-wide text-gray-900 sm:text-lg md:text-xl">Summer Campaign</p>
                    </div>
                    <div className="flex items-center space-x-2.5 overflow-hidden">
                      <p className="text-xs text-gray-600 shrink-0 md:text-sm">Editorial</p>
                      <p className="completed">Completed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="card2" className="rounded-[20px] bg-white drop-shadow-xl w-full max-w-[400px]">
                <div className="flex px-5 py-5 space-x-4">
                  <div className="p-2.5 flex flex-col justify-center items-center rounded-[18px] bg-[#F3F4F6] h-14 w-14">
                    <span className="text-xs font-black leading-tight tracking-wider text-center text-black uppercase">June</span>
                    <span className="text-lg font-black leading-none tracking-wider text-center text-black">3</span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="break-all whitespace-pre-wrap">
                      <p className="font-medium tracking-wide text-gray-900 sm:text-lg md:text-xl">Summer Campaign</p>
                    </div>
                    <div className="flex items-center space-x-2.5 overflow-hidden">
                      <p className="text-xs text-gray-600 shrink-0 md:text-sm">Lifestyle</p>
                      <p className="completed">Completed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="card3" className="rounded-[20px] bg-white drop-shadow-xl w-full max-w-[400px]">
                <div className="flex px-5 py-5 space-x-4">
                  <div className="p-2.5 flex flex-col justify-center items-center rounded-[18px] bg-[#F3F4F6] h-14 w-14">
                    <span className="text-xs font-black leading-tight tracking-wider text-center text-black uppercase">June</span>
                    <span className="text-lg font-black leading-none tracking-wider text-center text-black">10</span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="break-all whitespace-pre-wrap">
                      <p className="font-medium tracking-wide text-gray-900 sm:text-lg md:text-xl">Fall Flats</p>
                    </div>
                    <div className="flex items-center space-x-2.5 overflow-hidden">
                      <p className="text-xs text-gray-600 shrink-0 md:text-sm">Tabletop</p>
                      <p className="todo">To Do</p>
                      <p className="text-xs text-gray-600 shrink-0 md:text-sm">50 shots</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="card4" className="rounded-[20px] bg-white drop-shadow-xl w-full max-w-[400px]">
                <div className="flex px-5 py-5 space-x-4">
                  <div className="p-2.5 flex flex-col justify-center items-center rounded-[18px] bg-[#F3F4F6] h-14 w-14">
                    <span className="text-xs font-black leading-tight tracking-wider text-center text-black uppercase">July</span>
                    <span className="text-lg font-black leading-none tracking-wider text-center text-black">7</span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="break-all whitespace-pre-wrap">
                      <p className="font-medium tracking-wide text-gray-900 sm:text-lg md:text-xl">Fall Apparel</p>
                    </div>
                    <div className="flex items-center space-x-2.5 overflow-hidden">
                      <p className="text-xs text-gray-600 shrink-0 md:text-sm">Ecomm</p>
                      <p className="todo">To Do</p>
                      <p className="text-xs text-gray-600 shrink-0 md:text-sm">32 shots</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="card5" className="rounded-[20px] bg-white drop-shadow-xl w-full max-w-[400px]">
                <div className="flex px-5 py-5 space-x-4">
                  <div className="p-2.5 flex flex-col justify-center items-center rounded-[18px] bg-[#F3F4F6] h-14 w-14">
                    <span className="text-lg font-black leading-none tracking-wider text-center text-black opacity-50">TBS</span>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="break-all whitespace-pre-wrap">
                      <p className="font-medium tracking-wide text-gray-900 sm:text-lg md:text-xl">Fall Social</p>
                    </div>
                    <div className="flex items-center space-x-2.5 overflow-hidden">
                      <p className="text-xs text-gray-600 shrink-0 md:text-sm">Other</p>
                      <p className="schedule">Schedule</p>
                      <p className="text-xs text-gray-600 shrink-0 md:text-sm">12 shots</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
  )
}

export default ShotAnimation