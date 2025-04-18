import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = ["Hi, I'm Snehal Suman", "Frontend Developer", "Backend Developer"];
  const [currenText, setCurrentText] = useState("");
  const [endValue, setendValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText(texts[index].substring(0, endValue));

      if (isForward) {
        setendValue((prev) => prev + 1);
        if (endValue > texts[index].length + 5) {
          setIsForward(false);
        }
      } else {
        setendValue((prev) => prev - 1);
        if (endValue < 1) {
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index]);

  return (
    <div className="transition ease duration-300 text-xl md:text-6xl font-bold leading-normal tracking-tighter text-[#e0d6c9]">
      {currenText}
      <span className="animate-pulse text-white">|</span>
    </div>
  );
};

export default TextChange;