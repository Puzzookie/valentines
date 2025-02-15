import { useState, useEffect } from "react";
import { FadeInComponent } from "../Components/FadeInComponent";
import { NextComponent } from "../Components/NextComponent";

function Four() {
  const [showNext, setShowNext] = useState(false);

  const [firstSelected, setFirstSelected] = useState(true);
  const [secondSelected, setSecondSelected] = useState(true);
  const [thirdSelected, setThirdSelected] = useState(true);
  const [fourthSelected, setFourthSelected] = useState(true);
  const [fifthSelected, setFifthSelected] = useState(true);
  const [sixthSelected, setSixthSelected] = useState(true);
  const [seventhSelected, setSeventhSelected] = useState(true);
  const [eighthSelected, setEighthSelected] = useState(true);
  const [ninthSelected, setNinthSelected] = useState(true);

  const [index, setIndex] = useState(0);
  const [solution, setSolution] = useState([]);
  const [guess, setGuess] = useState([]);

  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {

    if(startTimer)
    {
      const timer = setInterval(() => {
        clearCells(false);

        if(index < solution.length)
        {
          const num = solution[index];
          if(num === 1)
            {
              setFirstSelected(true);      
            }
            else if(num ===  2)
            {
              setSecondSelected(true);
            }
            else if(num === 3)
            {
              setThirdSelected(true);
            }
            else if(num === 4)
            {
              setFourthSelected(true);
            }
            else if(num === 5)
            {
              setFifthSelected(true);
            }
            else if(num === 6)
            {
              setSixthSelected(true);
            }
            else if(num === 7)
            {
              setSeventhSelected(true);
            }
            else if(num === 8)
            {
              setEighthSelected(true);
            }
            else if(num === 9)
            {
              setNinthSelected(true);
            }

            setIndex(index + 1);   
        }
        else
        {
          console.log("Done");
          setStartTimer(false);
          setIndex(0);
        }
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [startTimer, index]);

  const handleCellClick = (num) => {

    if(solution.length === 0)
    {
      return
    }
    if(startTimer)
    {
      return;
    }

    clearCells(false);
    guess.push(num);

    if(num === 1)
    {
      setFirstSelected(true);      
    }
    else if(num ===  2)
    {
      setSecondSelected(true);
    }
    else if(num === 3)
    {
      setThirdSelected(true);
    }
    else if(num === 4)
    {
      setFourthSelected(true);
    }
    else if(num === 5)
    {
      setFifthSelected(true);
    }
    else if(num === 6)
    {
      setSixthSelected(true);
    }
    else if(num === 7)
    {
      setSeventhSelected(true);
    }
    else if(num === 8)
    {
      setEighthSelected(true);
    }
    else if(num === 9)
    {
      setNinthSelected(true);
    }

    if(guess[index] === solution[index])
    {
      if((index + 1)=== solution.length)
      {
          console.log("Done");
          if(solution.length === 7)
          {
            setShowNext(true);
          }
      }
      setIndex(index + 1);
    }
    else
    {
      clearCells(true);
      setSolution([]);
      setGuess([]);
    }
  }

  const clearCells = (value) => 
  {
    setFirstSelected(value);
    setSecondSelected(value);
    setThirdSelected(value);
    setFourthSelected(value);
    setFifthSelected(value);
    setSixthSelected(value);
    setSeventhSelected(value);
    setEighthSelected(value);
    setNinthSelected(value);
  }

  const handleStartClick = () => {

    if(startTimer)
    {
      return;
    }
    if(solution.length !== guess.length)
    {
      return;
    }

      clearCells(false);
      setIndex(0);
      setGuess([]);

      let randCell = Math.floor(Math.random() * 9) + 1;
      if(solution.length > 0)
      {
        while(randCell === solution[solution.length - 1])
        {
          randCell = Math.floor(Math.random() * 9) + 1;
        }
      }
      solution.push(randCell);
      setStartTimer(true);
  }

  return (showNext) ? (
    <NextComponent title={`James says, 'Great job!'`} body={"You're always making the right moves"} level={5} />
  ) : (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-b from-pink-600 via-pink-600 to-pink-400">
      <div className={`mt-6 mb-6 card bg-gradient-to-b from-pink-200 via-pink-100 to-pink-200 text-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full text-center transform transition-all duration-300 ease-in-out`}>
      <FadeInComponent>  
        <h1 className="transition duration-300 ease-in-out text-4xl text-pink-600 font-bold mb-6 mt-6 hover:scale-115 cursor-pointer">James Says</h1>
        <div className="flex justify-center items-center gap-3 mt-2 mb-6">
        <button
          className={`text-2xl min-w-12 min-h-12 shadow-gray-400 transform transition text-center duration-300 ease-in-out hover:scale-115 cursor-pointer ${firstSelected ? 'bg-pink-500 rounded-lg' : 'bg-pink-300 rounded-lg'}`}
          onClick={() => handleCellClick(1)}>
          
        </button>
        <button
          className={`text-2xl min-w-12 min-h-12 shadow-gray-400 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer ${secondSelected ? 'bg-pink-500 rounded-lg' : 'bg-pink-300 rounded-lg'}`}
          onClick={() => handleCellClick(2)}>
          
        </button>
        <button
          className={`text-2xl min-w-12 min-h-12 shadow-gray-400 transform transition text-center duration-300 ease-in-out hover:scale-115 cursor-pointer ${thirdSelected ? 'bg-pink-500 rounded-lg' : 'bg-pink-300 rounded-lg'}`}
          onClick={() => handleCellClick(3)}>
          
        </button>
        </div>
        <div className="flex justify-center items-center gap-3 mt-2 mb-6">
        <button
          className={`text-2xl min-w-12 min-h-12 shadow-gray-400 transform transition text-center duration-300 ease-in-out hover:scale-115 cursor-pointer ${fourthSelected ? 'bg-pink-500 rounded-lg' : 'bg-pink-300 rounded-lg'}`}
          onClick={() => handleCellClick(4)}>
          
        </button>
        <button
          className={`text-2xl min-w-12 min-h-12 shadow-gray-400 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer ${fifthSelected ? 'bg-pink-500 rounded-lg' : 'bg-pink-300 rounded-lg'}`}
          onClick={() => handleCellClick(5)}>
          
        </button>
        <button
          className={`text-2xl min-w-12 min-h-12 shadow-gray-400 transform transition text-center duration-300 ease-in-out hover:scale-115 cursor-pointer ${sixthSelected ? 'bg-pink-500 rounded-lg' : 'bg-pink-300 rounded-lg'}`}
          onClick={() => handleCellClick(6)}>
          
        </button>
       
        </div>
        <div className="flex justify-center items-center gap-3 mt-2 mb-6">
        <button
          className={`text-2xl min-w-12 min-h-12 shadow-gray-400 transform transition text-center duration-300 ease-in-out hover:scale-115 cursor-pointer ${seventhSelected ? 'bg-pink-500 rounded-lg' : 'bg-pink-300 rounded-lg'}`}
          onClick={() => handleCellClick(7)}>
          
        </button>
        <button
          className={`text-2xl min-w-12 min-h-12 shadow-gray-400 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer ${eighthSelected ? 'bg-pink-500 rounded-lg' : 'bg-pink-300 rounded-lg'}`}
          onClick={() => handleCellClick(8)}>
          
        </button>
        <button
          className={`text-2xl min-w-12 min-h-12 shadow-gray-400 transform transition text-center duration-300 ease-in-out hover:scale-115 cursor-pointer ${ninthSelected ? 'bg-pink-500 rounded-lg' : 'bg-pink-300 rounded-lg'}`}
          onClick={() => handleCellClick(9)}>
          
        </button>
        </div>
        {
          (guess.length === solution.length) ? (<button
            onClick={handleStartClick}
            className="bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg shadow-gray-400 hover:bg-pink-600 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer"
          >
            {guess.length === 0 ? "Start" : "Next"}
          </button>) : (<button
            className="bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg shadow-gray-400 hover:bg-pink-600 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer"
          >
            {guess.length}/{solution.length}
          </button>)
        }
        
        <p className="transition duration-300 ease-in-out text-2xl text-pink-600 mt-6 mb-6 hover:scale-115 cursor-pointer">
          {(guess.length < solution.length) ? (startTimer ? "Memorize The Sequence" : "Your Turn") : (guess.length === 0) ? "Goal: A sequence of 7" : `Level ${solution.length} Complete!`}
         </p>
        
        </FadeInComponent>
      </div>
    </div>
  );
}

export default Four;
