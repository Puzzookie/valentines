import { useState } from "react";
import { FadeInComponent } from "../Components/FadeInComponent";
import { NextComponent } from "../Components/NextComponent";

function Three() {
  const dice = [ "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  const randDice = () => {
    return Math.floor(Math.random() * dice.length);
  }

  const [showNext, setShowNext] = useState(false);

  const [first, setFirst] = useState(dice[randDice()]);
  const [second, setSecond] = useState(dice[randDice()]);
  const [third, setThird] = useState(dice[randDice()]);
  const [fourth, setFourth] = useState(dice[randDice()]);
  const [fifth, setFifth] = useState(dice[randDice()]);

  const [firstSelected, setFirstSelected] = useState(true);
  const [secondSelected, setSecondSelected] = useState(true);
  const [thirdSelected, setThirdSelected] = useState(true);
  const [fourthSelected, setFourthSelected] = useState(true);
  const [fifthSelected, setFifthSelected] = useState(true);

  const [state, setState] = useState(0);

  const handleYesClick = () => {
    console.log("OK");
   // setShowNext(true);
  };

  const handleDiceClick = (num) => {

    if(state === 0)
    {
      return;
    }

    if(num === 1)
    {
      setFirstSelected(!firstSelected);      
    }
    else if(num ===  2)
    {
      setSecondSelected(!secondSelected);
    }
    else if(num === 3)
    {
      setThirdSelected(!thirdSelected);
    }
    else if(num === 4)
    {
      setFourthSelected(!fourthSelected);
    }
    else if(num === 5)
    {
      setFifthSelected(!fifthSelected);
    }
  }

  const handleRollClick = () => {
      setState(state + 1);

      if(firstSelected)
      {
        setFirst(dice[randDice()]);
        setFirstSelected(false);
      }
      if(secondSelected)
      {
        setSecond(dice[randDice()]);
        setSecondSelected(false);
      }
      if(thirdSelected)
      {
        setThird(dice[randDice()]);
        setThirdSelected(false);
      }
      if(fourthSelected)
      {
        setFourth(dice[randDice()]);
        setFourthSelected(false);
      }
      if(fifthSelected)
      {
        setFifth(dice[randDice()]);
        setFifthSelected(false);
      }

      if(state === 2)
      {
        setFirstSelected(true);
        setSecondSelected(true);
        setThirdSelected(true);
        setFourthSelected(true);
        setFifthSelected(true);

        setState(0);
      }
  }

  return ((first === second) && (second === third) && (third === fourth) && (fourth === fifth)) ? (
    <NextComponent title={`Yahtzee!`} body={<span className="flex justify-center items-center gap-3 mt-2 mb-6">
    <button
      className={`text-6xl shadow-gray-400 transform transition text-center duration-300 ease-in-out hover:scale-115 cursor-pointer`}
      >
      {first}
    </button>
    <button
      className={`text-6xl shadow-gray-400 transform transition text-center duration-300 ease-in-out hover:scale-115 cursor-pointer`}
      >
      {second}
    </button>
    <button
      className={`text-6xl shadow-gray-400 transform transition text-center duration-300 ease-in-out hover:scale-115 cursor-pointer`}
      >
      {third}
    </button>
    <button
      className={`text-6xl shadow-gray-400 transform transition text-center duration-300 ease-in-out hover:scale-115 cursor-pointer`}
      >
      {fourth}
    </button>
    <button
      className={`text-6xl shadow-gray-400 transform transition text-center duration-300 ease-in-out hover:scale-115 cursor-pointer`}
      >
      {fifth}
    </button>
    </span>} level={4} />
  ) : (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-b from-pink-600 via-pink-600 to-pink-400">
      <div className={`mt-6 mb-6 card bg-gradient-to-b from-pink-200 via-pink-100 to-pink-200 text-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full text-center transform transition-all duration-300 ease-in-out`}>
      <FadeInComponent>  
        <h1 className="transition duration-300 ease-in-out text-4xl text-pink-600 font-bold mb-6 mt-6 hover:scale-115 cursor-pointer">Owa Owa</h1>
        <div className="flex justify-center items-center gap-3 mt-2 mb-6">
        <button
          className={`text-7xl shadow-gray-400 transform transition text-center duration-300 ease-in-out hover:scale-115 cursor-pointer ${firstSelected ? 'bg-pink-500 rounded-lg' : ''}`}
          onClick={() => handleDiceClick(1)}>
          {first}
        </button>
        <button
          className={`text-7xl shadow-gray-400 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer ${secondSelected ? 'bg-pink-500 rounded-lg' : ''}`}
          onClick={() => handleDiceClick(2)}>
          {second}
        </button>
        <button
          className={`text-7xl shadow-gray-400 transform transition text-center duration-300 ease-in-out hover:scale-115 cursor-pointer ${thirdSelected ? 'bg-pink-500 rounded-lg' : ''}`}
          onClick={() => handleDiceClick(3)}>
          {third}
        </button>
        <button
          className={`text-7xl shadow-gray-400 transform transition text-center duration-300 ease-in-out hover:scale-115 cursor-pointer ${fourthSelected ? 'bg-pink-500 rounded-lg' : ''}`}
          onClick={() => handleDiceClick(4)}>
          {fourth}
        </button>
        <button
          className={`text-7xl shadow-gray-400 transform transition text-center duration-300 ease-in-out hover:scale-115 cursor-pointer ${fifthSelected ? 'bg-pink-500 rounded-lg' : ''}`}
          onClick={() => handleDiceClick(5)}>
          {fifth}
        </button>
        </div>
        <button
        onClick={handleRollClick}
        className="bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg shadow-gray-400 hover:bg-pink-600 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer"
      >
        Roll
      </button>
        {
          (state === 0) ? (<p className="transition duration-300 ease-in-out text-2xl text-pink-600 mt-6 mb-6 hover:scale-115 cursor-pointer">
          Roll a Yahtzee
       </p>):(<p className="transition duration-300 ease-in-out text-2xl text-pink-600 mt-6 mb-6 hover:scale-115 cursor-pointer">
          Roll #{state} - Select dice to roll
       </p>)
        }
        </FadeInComponent>
      </div>
    </div>
  );
}

export default Three;
