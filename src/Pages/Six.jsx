import { useState, useEffect } from "react";
import { FadeInComponent } from "../Components/FadeInComponent";
import { NextComponent } from "../Components/NextComponent";

function Six() {
  const [showNext, setShowNext] = useState(false);

  const [firstTranslate, setFirstTranslate] = useState("-translate-x-25 translate-y-0");
  const [secondTranslate, setSecondTranslate] = useState("translate-x-0 translate-y-0");
  const [thirdTranslate, setThirdTranslate] = useState("translate-x-25 translate-y-0");

  const badCard = ["❔", "🐸"];
  const goodCard = ["❔", "🤴🏻"];

  const [timeLeft, setTimeLeft] = useState(5.00);
  const [startTimer, setStartTimer] = useState(false);

  const [firstEmojiIndex, setFirstEmojiIndex] = useState(1);
  const [secondEmojiIndex, setSecondEmojiIndex] = useState(1);
  const [thirdEmojiIndex, setThirdEmojiIndex] = useState(1);

  const [speed, setSpeed] = useState(1);

  const [hasChosen, setHasChosen] = useState(true);

  useEffect(() => {

    if(startTimer)
    {

      const timer = setInterval(() => {
        

        if((timeLeft.toFixed(2)).toString() === "4.00")
        {
          setSecondEmojiIndex(0);
        }
        else if((timeLeft.toFixed(2) % speed).toFixed(2).toString() === "0.00" && timeLeft.toFixed(2) < 4)
        {
          swap();
        }
      
      setTimeLeft(timeLeft - 0.01); // decrement by 0.1 seconds
    }, 10); // every 100ms

      return () => {
        clearTimeout(timer);
      };
    }
  }, [timeLeft, startTimer]);


  if (timeLeft <= 0) {
    setStartTimer(false);
    setTimeLeft(5.00);
  }

  const swap = () => {
    const randomNumber = Math.floor(Math.random() * 3);
  
    if (randomNumber === 0) {
      const temp = firstTranslate;
      setFirstTranslate(secondTranslate);
      setSecondTranslate(temp);
    } else if (randomNumber === 1) {
      const temp2 = secondTranslate;
      setSecondTranslate(thirdTranslate);
      setThirdTranslate(temp2);
    } else if (randomNumber === 2) {
      const temp3 = thirdTranslate;
      setThirdTranslate(firstTranslate);
      setFirstTranslate(temp3);
    }
  }

  const handleClick = (num) => {

    if(startTimer)
    {
      return;
    }

    if(hasChosen)
    {
      return;
    }
    setFirstEmojiIndex(1);
    setSecondEmojiIndex(1);
    setThirdEmojiIndex(1);
  
    setHasChosen(true);

    if(num === 2)
    {
      if(speed === 1)
      {
        setSpeed(0.5);
      }
      if(speed === 0.5)
      {
        setSpeed(0.25);
      }
      else if(speed === 0.25)
      {
        setShowNext(true);
      }
    }
    else
    {
      setSpeed(1);
    }
  };
  
  const handleStartClick = () => {

    setHasChosen(false);

    setFirstEmojiIndex(0);
    setSecondEmojiIndex(1);
    setThirdEmojiIndex(0);

    setStartTimer(true);

  }
  return showNext ? (
    <NextComponent title="Laser Focused!" body="You can shift that attention back to me now 🐸" level={7} />
  ) : (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-b from-pink-600 via-pink-600 to-pink-400">
      <div
        className="mt-6 mb-6 card bg-gradient-to-b from-pink-200 via-pink-100 to-pink-200 text-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full text-center relative"
      >
        <FadeInComponent>
        <h1 className="min-h-36 transition duration-300 ease-in-out text-4xl text-pink-600 font-bold mb-6 mt-6 hover:scale-115 cursor-pointer">
        {(hasChosen && !startTimer) ? "Keep your eyes on 🤴🏻" : "Don't Blink"}
        </h1>
        <div className="relative flex justify-center items-center mt-18 mb-18">
            {/* Button 1 */}
            <button
              onClick={() => handleClick(1)}
              className={`transition-all min-w-18 min-h-18 duration-500 ease-in-out transform p-4 bg-pink-500 text-white text-4xl rounded-md absolute ${firstTranslate} hover:scale-115 cursor-pointer`}
            >
              {badCard[firstEmojiIndex]}
            </button>

            <button
              onClick={() => handleClick(2)}
              className={`transition-all min-w-18 min-h-18 duration-500 ease-in-out transform p-4 bg-pink-500 text-white text-4xl rounded-md absolute ${secondTranslate} hover:scale-115 cursor-pointer`}
            >
              {goodCard[secondEmojiIndex]}
            </button>

            <button
              onClick={() => handleClick(3)}
              className={`transition-all min-w-18 min-h-18 duration-500 ease-in-out transform p-4 bg-pink-500 text-white text-4xl rounded-md absolute ${thirdTranslate} hover:scale-115 cursor-pointer`}
            >
              {badCard[thirdEmojiIndex]}
            </button>

          </div>
          {
          (hasChosen && !startTimer) ? (<button onClick={handleStartClick} className="min-h-14 bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg shadow-gray-400 hover:bg-pink-600 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer">{speed === 1 ? "Press to start" : speed === 0.5 ? "Round 1 Complete" : speed === 0.25 ? "Round 2 Complete" : "Congrats!"}</button>) : <p className="min-h-14 transition duration-300 ease-in-out text-2xl text-pink-600 mb-6 hover:scale-115 cursor-pointer">
            {speed === 1 ? "Round 1" : speed === 0.5 ? "Round 2" : speed === 0.25 ? "Round 3" : "Congrats!"}
          </p>
          }
          {
            (!hasChosen && !startTimer) ? (<p className="min-h-12 transition duration-300 ease-in-out text-2xl text-pink-600 mt-6 mb-6 hover:scale-115 cursor-pointer">
            Select the 🤴🏻
          </p>) : (<p className="min-h-12 transition duration-300 ease-in-out text-2xl text-pink-600 mt-6 mb-6 hover:scale-115 cursor-pointer">
            Goal: Finish Round 3
          </p>)
          }
          
        </FadeInComponent>
      </div>
    </div>
  );
}

export default Six;
