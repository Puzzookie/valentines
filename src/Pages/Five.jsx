import { useState, useEffect, useRef } from "react";
import { FadeInComponent } from "../Components/FadeInComponent";
import { NextComponent } from "../Components/NextComponent";

function Five() {

  const inputRef = useRef(null);


  const [showNext, setShowNext] = useState(false);
  const [value, setValue] = useState('');
  const [counter, setCounter] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30.0);
  const [startTimer, setStartTimer] = useState(false);

  const operation = ["*", "+", "-"];


  const [firstNumber, setFirstNumber] = useState(Math.floor(Math.random() * 12) + 1);
  const [secondNumber, setSecondNumber] = useState(Math.floor(Math.random() * 12) + 1);
  const [operationIndex, setOperationIndex] = useState(Math.floor(Math.random() * operation.length));

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
    setTimeLeft(30.0);
    setValue("");

    if(counter >= 20)
    {
      setShowNext(true);
    }
  }

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleStartClick = () => {
    setFirstNumber(Math.floor(Math.random() * 12) + 1);
    setSecondNumber(Math.floor(Math.random() * 12) + 1);
    setOperationIndex(Math.floor(Math.random() * operation.length));
    setValue("");
      setCounter(0);
      setStartTimer(true);
      inputRef.current.focus();
  }
  return showNext ? (
    <NextComponent title="Wow, you're a math wiz 🤓!" body="What do you think about this equation? You + Me = ❤️" level={6} />
  ) : (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-b from-pink-600 via-pink-600 to-pink-400">
      <div
        className={`mt-6 mb-6 card bg-gradient-to-b from-pink-200 via-pink-100 to-pink-200 text-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full text-center transform transition-all duration-300 ease-in-out`}
      >
        <FadeInComponent>  
        {
          startTimer ? (<h1 className="transition duration-300 ease-in-out text-4xl text-pink-600 font-bold mb-6 mt-6 hover:scale-115 cursor-pointer">
          {counter}
        </h1>) : (<h1 className="transition duration-300 ease-in-out text-4xl text-pink-600 font-bold mb-6 mt-6 hover:scale-115 cursor-pointer">
          Fast Math
        </h1>)
        }
          {startTimer ? (<p className="transition duration-300 ease-in-out text-2xl text-pink-600 mb-6 hover:scale-115 cursor-pointer">
            {timeLeft.toFixed(1)}
          </p>) : (<p className="transition duration-300 ease-in-out text-2xl text-pink-600 mb-6 hover:scale-115 cursor-pointer">
            Goal: 20 correct answers in 30 seconds
          </p>)  
          }
          {
            startTimer ? (<p className="transition duration-300 ease-in-out text-2xl text-pink-600 mb-6 hover:scale-115 cursor-pointer">
           {firstNumber}{operation[operationIndex]}{secondNumber}
          </p>) : (<button onClick={handleStartClick} className="bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg shadow-gray-400 hover:bg-pink-600 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer">Start</button>)
          }
        <div className="flex justify-center items-center gap-4 mt-6 mb-6">
        <input
        ref={inputRef}
        type="number"
        value={value}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {

            if(!startTimer)
              {
                  return;
              }
            let result = -1;
            if(operationIndex === 0)
            {
              result = firstNumber * secondNumber;
            }
            else if(operationIndex === 1)
            {
              result = firstNumber + secondNumber;
            }
            else if(operationIndex === 2)
            {
              result = firstNumber - secondNumber;
            }

            if(result.toString() === value)
            {
              setFirstNumber(Math.floor(Math.random() * 12) + 1);
              setSecondNumber(Math.floor(Math.random() * 12) + 1);
              setOperationIndex(Math.floor(Math.random() * operation.length));
              setValue("");
              setCounter(counter + 1);
            }
            else
            {
              setValue("");
            }
          }
        }}
        className="appearance-none block w-full bg-pink-300 text-pink-900 rounded py-3 px-4 leading-tight focus:outline-none"
        placeholder="Enter a number"
      />
      </div>
      
        </FadeInComponent>
      </div>
    </div>
  );
}

export default Five;
