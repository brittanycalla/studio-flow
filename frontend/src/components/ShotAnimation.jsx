import { gsap } from "gsap"
import { useState, useEffect } from "react"
import check from "../check.svg"

const ShootAnimation = () => {
  const [array, setArray] = useState(["#card5", "#card4", "#card3", "#card2", "#card1"])
  const [firstShot, setFirstShot] = useState("")
  // const [firstShotStatus, setFirstShotStatus] = useState("To Do")

  const startAnimation = array => {
    gsap.to(".checkbox", {backgroundColor: "#FFF"})
    gsap.to(array[0], {y: 1500, z: 0, duration: 1.2})
    gsap.to(`${array[1]} .checkbox`, {backgroundColor: "#000", duration: 0.4, delay: 1})
    gsap.fromTo(`${array[1]} .check`, {y: 5, opacity: 0}, {y: 0, opacity: 100, duration: 0.2, delay: 1})
    gsap.fromTo(array[1], {y: 140}, {y: 0, z: 100, duration: 0.4})
    gsap.fromTo(array[2], {y: 280}, {y: 140, duration: 0.4})
    gsap.fromTo(array[3], {y: 420}, {y: 280, duration: 0.4})
    gsap.fromTo(array[4], {y: 560}, {y: 420, duration: 0.4})
  }

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      const [first, ...rest] = array
      setArray([...rest, first])
    }, 1400)

    setTimeout(() => {
      setFirstShot(array[1])
    }, 950)

    startAnimation(array)
    
    return () => clearInterval(wordTimeout)
  }, [array])


  return (
    <div className="mt-12 rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 h-[400px] md:h-[420px] lg:h-[450px] flex flex-col items-center p-4">
            <div className="relative w-full h-full">

              <div id="card1" className="rounded-[20px] bg-white drop-shadow-xl w-full max-w-[400px]">
                <div className="flex flex-wrap items-center px-5 py-5 space-y-2">
                  <div className="flex items-center space-x-2.5">
                    <div className="relative">
                      <div className="checkbox checkbox-xs"></div>
                      <img src={check} alt="checkmark" className="check absolute w-2.5 h-2.5 top-[3px] left-[3px]" />
                    </div>
                    <p className="font-medium tracking-wide text-gray-900 sm:text-lg md:text-xl">90863-WASHEDOAK</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <p className={`status ${firstShot === "#card1" ? "completed transition-all duration-200 ease-in" : "todo"}`}>{firstShot === "#card1" ? "Completed" : "To Do"}</p>
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">90863</p>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">WASHED OAK</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">Round Coffee Table</p>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">Furniture</p>
                  </div>
                </div>
              </div>

              <div id="card2" className="rounded-[20px] bg-white drop-shadow-xl w-full max-w-[400px]">
                <div className="flex flex-wrap items-center px-5 py-5 space-y-2">
                <div className="flex items-center space-x-2.5">
                    <div className="relative">
                      <div className="checkbox checkbox-xs"></div>
                      <img src={check} alt="checkmark" className="check absolute w-2.5 h-2.5 top-[3px] left-[3px]" />
                    </div>
                    <p className="font-medium tracking-wide text-gray-900 sm:text-lg md:text-xl">90863-COOLWALNUT</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                  <p className={`status ${firstShot === "#card2" ? "completed transition-all duration-200 ease-in" : "todo"}`}>{firstShot === "#card2" ? "Completed" : "To Do"}</p>
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">90863</p>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">COOL WALNUT</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">Round Coffee Table</p>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">Furniture</p>
                  </div>
                </div>
              </div>

              <div id="card3" className="rounded-[20px] bg-white drop-shadow-xl w-full max-w-[400px]">
                <div className="flex flex-wrap items-center px-5 py-5 space-y-2">
                  <div className="flex items-center space-x-2.5">
                    <div className="relative">
                      <div className="checkbox checkbox-xs"></div>
                      <img src={check} alt="checkmark" className="check absolute w-2.5 h-2.5 top-[3px] left-[3px]" />
                    </div>
                    <p className="font-medium tracking-wide text-gray-900 sm:text-lg md:text-xl">90863-WINTERWOOD</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                  <p className={`status ${firstShot === "#card3" ? "completed transition-all duration-200 ease-in" : "todo"}`}>{firstShot === "#card3" ? "Completed" : "To Do"}</p>
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">90863</p>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">WINTER WOOD</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">Round Coffee Table</p>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">Furniture</p>
                  </div>
                </div>
              </div>

              <div id="card4" className="rounded-[20px] bg-white drop-shadow-xl w-full max-w-[400px]">
                <div className="flex flex-wrap items-center px-5 py-5 space-y-2">
                  <div className="flex items-center space-x-2.5">
                  <div className="relative">
                      <div className="checkbox checkbox-xs"></div>
                      <img src={check} alt="checkmark" className="check absolute w-2.5 h-2.5 top-[3px] left-[3px]" />
                    </div>
                    <p className="font-medium tracking-wide text-gray-900 sm:text-lg md:text-xl">10567-NATURAL</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                  <p className={`status ${firstShot === "#card4" ? "completed transition-all duration-200 ease-in" : "todo"}`}>{firstShot === "#card4" ? "Completed" : "To Do"}</p>
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">10567</p>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">NATURAL</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">Decorative Wood Arches</p>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">Decor</p>
                  </div>
                </div>
              </div>

              <div id="card5" className="rounded-[20px] bg-white drop-shadow-xl w-full max-w-[400px]">
                <div className="flex flex-wrap items-center px-5 py-5 space-y-2">
                  <div className="flex items-center space-x-2.5">
                  <div className="relative">
                      <div className="checkbox checkbox-xs"></div>
                      <img src={check} alt="checkmark" className="check absolute w-2.5 h-2.5 top-[3px] left-[3px]" />
                    </div>
                    <p className="font-medium tracking-wide text-gray-900 sm:text-lg md:text-xl">10567-BLACKENEDWOOD</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                  <p className={`status ${firstShot === "#card5" ? "completed transition-all duration-200 ease-in" : "todo"}`}>{firstShot === "#card5" ? "Completed" : "To Do"}</p>
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">10567</p>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">BLACKENED WOOD</p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">Decorative Wood Arches</p>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <p className="text-xs text-gray-600 shrink-0 md:text-sm">Decor</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
  )
}

export default ShootAnimation