import { useState, useEffect } from "react";
import { FadeInComponent } from "../Components/FadeInComponent";
import { NextComponent } from "../Components/NextComponent";

function Seven() {
  const [showNext, setShowNext] = useState(false);
  const [time, setTime] = useState(0.0);
  const [startTimer, setStartTimer] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (startTimer) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime + 0.1); // Update with previous value to avoid issues
      }, 100); // every 100ms

      return () => {
        clearInterval(timer); // Clean up the interval
      };
    }
    return undefined;
  }, [startTimer]);

  const handleYesClick = () => {
    if (startTimer) {
      setStartTimer(false);
      setGameOver(true);
      if(time.toFixed(1) > 14 && time.toFixed(1) < 16)
        {
setShowNext(true);
        }
      
    } else {
      setGameOver(false);
      setStartTimer(true);
      setTime(0);

    }
  };

  return showNext ? (
    <NextComponent title={`${time.toFixed(1)} seconds`} body="More like jaw dropping!" level={8} />
  ) : (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-b from-pink-600 via-pink-600 to-pink-400">
      <div className="mt-6 mb-6 card bg-gradient-to-b from-pink-200 via-pink-100 to-pink-200 text-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full text-center transform transition-all duration-300 ease-in-out">
        <FadeInComponent>  
          <h1 className="transition duration-300 ease-in-out text-4xl text-pink-600 font-bold mb-6 mt-6 hover:scale-115 cursor-pointer">
            Drop The Ball
          </h1>
          {gameOver ? (
            <p className="transition duration-300 ease-in-out text-2xl text-pink-600 mb-6 hover:scale-115 cursor-pointer">
               {time.toFixed(1)} seconds
            </p>
          ) : (
            <p className="transition duration-300 ease-in-out text-2xl text-pink-600 mb-6 hover:scale-115 cursor-pointer">
              {startTimer ? "Timer has started" : "Good luck"}
            </p>
          )}
          <div className="flex justify-center items-center gap-4 mt-6 mb-6">
            <button
              onClick={handleYesClick}
              className="bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg shadow-gray-400 hover:bg-pink-600 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer"
            >
              {startTimer ? "Stop Timer" : "Start Timer"}
            </button>
          </div>
          <p className="transition duration-300 ease-in-out text-2xl text-pink-600 mb-6 hover:scale-115 cursor-pointer">
            Goal: Stop the timer after 15 seconds has passed and be within 1 second
          </p>   
        </FadeInComponent>
      </div>
    </div>
  );
}

export default Seven;
