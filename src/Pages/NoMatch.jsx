import { useState } from "react";
import { FadeInComponent } from "../Components/FadeInComponent";
import { NextComponent } from "../Components/NextComponent";
import { useNavigate } from 'react-router-dom';

function NoMatch() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-b from-pink-600 via-pink-600 to-pink-400">
      <div className={`mt-6 mb-6 card bg-gradient-to-b from-pink-200 via-pink-100 to-pink-200 text-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full text-center transform transition-all duration-300 ease-in-out`}>
        <div className="flex justify-center items-center gap-4 mt-6 mb-6">
           <div> 
           <p className="transition duration-300 ease-in-out mb-6 text text-pink-600 hover:scale-115 cursor-pointer">
              The page you're looking for doesn't exist
            </p>
            <button
              onClick={handleHomeClick}
              className="bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg shadow-gray-400 hover:bg-pink-600 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer"
            >
              Home
            </button>
           </div>
          </div>
      </div>
    </div>
  );
}

export default NoMatch;
