import { useState, useEffect } from "react";
import { FadeInComponent } from "../Components/FadeInComponent";
import { NextComponent } from "../Components/NextComponent";

function Nine() {
  const [showNext, setShowNext] = useState(false);

  const [rowState, setRowState] = useState("0001000"); // Initial state
  const [previousRowState, setPreviousRowState] = useState("1111111"); // Previous row state
  const [movingRight, setMovingRight] = useState(true); // Direction: true for right, false for left
  const [startTimer, setStartTimer] = useState(false);

  const [milliseconds, setMilliseconds] = useState(300);
  useEffect(() => {
    if (startTimer) {
      const timer = setInterval(() => {
        // Save the current row as the previous row before updating it

        // Get the current row as an array
        let currentRow = rowState.split("");

        // Move left or right depending on direction
        if (movingRight) {
          // Shift left
          currentRow = ["0", ...currentRow.slice(0, -1)];
          // If it reaches the far right, reverse the direction
          if (currentRow.join("") === "0000001") {
            setMovingRight(false);
          }
        } else {
          // Shift right
          currentRow = [...currentRow.slice(1), "0"];

          // If it reaches the far left, reverse the direction
          if (currentRow.join("") === "1000000") {
            setMovingRight(true);
          }
        }

        setRowState(currentRow.join(""));
      }, milliseconds); // Update every second

      return () => {
        clearInterval(timer); // Clean up the interval on unmount
      };
    }
  }, [startTimer, rowState, movingRight]);

  const handleStartClick = () => {
    if(startTimer)
    {
      if(rowState === previousRowState || previousRowState === "1111111")
      {
        setMovingRight(true);
        setPreviousRowState(rowState);
        setRowState("0001000");
        if(milliseconds === 190)
        {
          console.log("Won");
          setShowNext(true);
        }
        setMilliseconds(milliseconds - 10);
      }
      else
      {
        console.log("Lost");
        setStartTimer(false);
      }
    }
    else
    {
      setStartTimer(true);
      setMilliseconds(300);
      setRowState("0001000");
      setPreviousRowState("1111111");
      setMovingRight(true);
    }
  };

  const handlePreviousClick = () => {
    setRowState(previousRowState);
  };

  return showNext ? (
    <NextComponent title={`Good timing!`} body={"You know what time it is..."} level={10} />
  ) : (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-b from-pink-600 via-pink-600 to-pink-400">
      <div className={`mt-6 mb-6 card bg-gradient-to-b from-pink-200 via-pink-100 to-pink-200 text-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full text-center transform transition-all duration-300 ease-in-out`}>
        <FadeInComponent>
        <h1 className="transition duration-300 ease-in-out text-4xl text-pink-600 font-bold mb-6 mt-6 hover:scale-115 cursor-pointer">{startTimer ? `${(milliseconds - 180)/10}`: previousRowState === "1111111" ? "Press Start to begin" : "Whoops! Try again"}</h1>
          {/* Row of Buttons */}
          <div className="flex justify-center items-center gap-1 mt-1 mb-1">
            <p className="text-pink-700 min-w-6">{((milliseconds - 180)/10) }</p>
            {rowState.split("").map((selected, index) => (
              <button
                key={index}
                className={`text-2xl min-w-10 min-h-10 shadow-gray-400 transform transition text-center duration-300 ease-in-out hover:scale-115 cursor-pointer ${selected === "1" ? "bg-pink-500 rounded-lg" : "bg-pink-300 rounded-lg"}`}
              >
              </button>
            ))}
          </div>

          <div className="flex justify-center items-center gap-1 mt-1 mb-1">
            <p className="text-pink-700 min-w-6">{((milliseconds - 180)/10) + 1}</p>
            {previousRowState.split("").map((selected, index) => (
              <button
                key={index}
                className={`text-2xl min-w-10 min-h-10 shadow-gray-400 transform transition text-center duration-300 ease-in-out hover:scale-115 cursor-pointer ${selected === "1" ? "bg-pink-500 rounded-lg" : "bg-pink-300 rounded-lg"}`}
              >
              </button>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4 mt-6">
            {/* Start/Stop Button */}
            <button
              onClick={handleStartClick}
              className="bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg shadow-gray-400 hover:bg-pink-600 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer"
            >
              {startTimer ? "Stop" : "Start"}
            </button>
          </div>
        </FadeInComponent>
      </div>
    </div>
  );
}

export default Nine;
