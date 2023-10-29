import { gsap } from "gsap";
import { useState, useEffect } from "react";
import check from "../check.svg";

const cardData = [
  { id: "card1", code: "90863", name: "WASHEDOAK", description: "Round Coffee Table", category: "Furniture" },
  { id: "card2", code: "90863", name: "COOLWALNUT", description: "Round Coffee Table", category: "Furniture" },
  { id: "card3", code: "90863", name: "WINTERWOOD", description: "Round Coffee Table", category: "Furniture" },
  { id: "card4", code: "10567", name: "NATURAL", description: "Decorative Wood Arches", category: "Decor" },
  { id: "card5", code: "10567", name: "TOASTEDWOOD", description: "Decorative Wood Arches", category: "Decor" }
];

const Card = ({ id, code, name, description, category, firstShot }) => (
  <div id={id} className="rounded-[20px] bg-white drop-shadow-xl w-full max-w-[400px]">
    <div className="flex flex-wrap items-center px-5 py-5 space-y-2">
      <div className="flex items-center space-x-2.5">
        <div className="relative">
          <div className="checkbox checkbox-xs"></div>
          <img src={check} alt="checkmark" className="check absolute w-2.5 h-2.5 top-[3px] left-[3px]" />
        </div>
        <p className="font-medium tracking-wide text-gray-900 sm:text-lg md:text-xl">{code}-{name}</p>
      </div>
      <div className="flex items-center space-x-2.5 w-full">
        <p className={`status ${firstShot === `#${id}` ? "completed transition-all duration-200 ease-in" : "todo"}`}>
          {firstShot === `#${id}` ? "Completed" : "To Do"}
        </p>
        <p className="text-xs text-gray-600 shrink-0 md:text-sm">{code}</p>
        <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
        <p className="text-xs text-gray-600 shrink-0 md:text-sm">{name.toUpperCase()}</p>
      </div>
      <div className="flex items-center space-x-2.5">
        <p className="text-xs text-gray-600 shrink-0 md:text-sm">{description}</p>
        <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
        <p className="text-xs text-gray-600 shrink-0 md:text-sm">{category}</p>
      </div>
    </div>
  </div>
);

const ShotAnimation = () => {
  const [array, setArray] = useState(cardData.map(card => `#${card.id}`));
  const [firstShot, setFirstShot] = useState("");

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
      const [first, ...rest] = array;
      setArray([...rest, first]);
    }, 1400);

    setTimeout(() => {
      setFirstShot(array[1]);
    }, 950);

    startAnimation(array);

    return () => clearInterval(wordTimeout);
  }, [array]);

  return (
    <div className="mt-12 rounded-[30px] md:rounded-[36px] bg-[#FAFAFA] overflow-hidden border-[1px] border-gray-200 h-[400px] md:h-[420px] lg:h-[450px] flex flex-col items-center p-4">
      <div className="relative w-full h-full">
        {cardData.map(card => (
          <Card key={card.id} {...card} firstShot={firstShot} />
        ))}
      </div>
    </div>
  );
};

export default ShotAnimation;