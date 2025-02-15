import { useState, useEffect } from "react";
import { FadeInComponent } from "../Components/FadeInComponent";
import { NextComponent } from "../Components/NextComponent";

function Two() {
  const [showNext, setShowNext] = useState(false);
  const [hits, setHits] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10.0);
  const [startTimer, setStartTimer] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {

    if(startTimer)
    {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 0.1); // decrement by 0.1 seconds
      }, 100); // every 100ms

      return () => {
        clearTimeout(timer);
      };
    }
  }, [timeLeft, startTimer]);

  if (timeLeft <= 0) {
    setStartTimer(false);
    setTimeLeft(10);
    setGameOver(true);
    
    if(hits >= 70)
    {
      setShowNext(true);
    }
  }

  const handleYesClick = () => {

    if(!gameOver)
    {
      setStartTimer(true);
      setHits(hits + 1);
    }
    else
    {
      setGameOver(false);
      setHits(0);
    }
  };

  return showNext ? (
    <NextComponent title={`Total hits: ${hits}`} body="Now I can say that you push my buttons!" level={3} />
  ) : (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-b from-pink-600 via-pink-600 to-pink-400">
      <div className={`mt-6 mb-6 card bg-gradient-to-b from-pink-200 via-pink-100 to-pink-200 text-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full text-center transform transition-all duration-300 ease-in-out`}>
      <FadeInComponent>  
      {
        (hits > 0) ? (<h1 className="transition duration-300 ease-in-out text-4xl text-pink-600 font-bold mb-6 mt-6 hover:scale-115 cursor-pointer">{hits} </h1>): 
        (      <h1 className="transition duration-300 ease-in-out text-4xl text-pink-600 font-bold mb-6 mt-6 hover:scale-115 cursor-pointer">
        Button Masher
   </h1> )

      }  
      {
          gameOver ? (<p className="transition duration-300 ease-in-out text-2xl text-pink-600 mb-6 hover:scale-115 cursor-pointer">
          Press the button to restart
        </p>) : ( <p className="transition duration-300 ease-in-out text-2xl text-pink-600 mb-6 hover:scale-115 cursor-pointer">
          {timeLeft.toFixed(1)}
        </p>)
        }
    <div className="flex justify-center items-center gap-4 mt-6 mb-6">
      <button
        onClick={handleYesClick}
        className="bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg shadow-gray-400 hover:bg-pink-600 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer"
      >
        Press Me
      </button>
        </div>
        <p className="transition duration-300 ease-in-out text-2xl text-pink-600 mb-6 hover:scale-115 cursor-pointer">
        Goal: Press the button at least 70 times in 10 seconds
      </p>   
       
        </FadeInComponent>
      </div>
    </div>
  );
}

export default Two;
