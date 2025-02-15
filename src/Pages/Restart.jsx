import { useState } from "react";
import { FadeInComponent } from "../Components/FadeInComponent";
import { NextComponent } from "../Components/NextComponent";
import { useNavigate } from 'react-router-dom';

function Restart() {
  const navigate = useNavigate();

  const handleYesClick = () => {
    localStorage.removeItem("level");
    navigate('/1');
  };

  const handleNoClick = () => {
    navigate('/');
  }

  return (<div className="flex justify-center min-h-screen items-center bg-gradient-to-b from-pink-600 via-pink-600 to-pink-400">
  <div
    className={`mt-6 mb-6 card bg-gradient-to-b from-pink-200 via-pink-100 to-pink-200 text-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full text-center transform transition-all duration-300 ease-in-out`}
  >
    <FadeInComponent>
      <h1 className="transition duration-300 ease-in-out text-4xl text-pink-600 font-bold mb-6 mt-6 hover:scale-115 cursor-pointer">
        Warning
      </h1>
      <p className="transition duration-300 ease-in-out text-2xl text-pink-600 mb-6 hover:scale-115 cursor-pointer">
        Are you sure you want to delete your progress?
      </p>
      <div className="flex justify-center items-center gap-4 mt-6 mb-6">
      {
        <>
            <button
              onClick={handleYesClick}
              className="bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg shadow-gray-400 hover:bg-pink-600 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer"
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg shadow-gray-400 hover:bg-pink-600 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer"
            >
              No
            </button>
        </>
      }
    </div>
    <div className="flex justify-center items-center h-12 mb-6">
        <p className="transition duration-300 ease-in-out text text-pink-600 hover:scale-115 cursor-pointer">
          This can't be undone. You will start from the beginning.
        </p>
    </div>
    </FadeInComponent>
  </div>
</div>)
}

export default Restart;
