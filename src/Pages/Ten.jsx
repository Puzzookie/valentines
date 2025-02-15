import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { FadeInComponent } from "../Components/FadeInComponent";
import { EndComponent } from "../Components/EndComponent";
function Ten() {
  const [response, setResponse] = useState("😊");
  const [showNext, setShowNext] = useState(false);

  const [responseObject, setResponseObject] = useState({
    "https://www.youtube.com/watch?v=ABfQuZqq8wg": "Ain't no mountain high enough..."
  });

  const handleNoClick = () => {
    if (Object.keys(responseObject).length !== 0) {
      const randomIndex = Math.floor(
        Math.random() * Object.keys(responseObject).length
      );
      const randomKey = Object.keys(responseObject)[randomIndex];
      const randomValue = responseObject[randomKey];

      delete responseObject[randomKey];
      setResponseObject(responseObject);

      setResponse(randomValue);
      window.open(randomKey, "_blank");
    } else {
      setResponse("");
    }
  };

  const handleYesClick = () => {
    setShowNext(true);
  };

  return showNext ? (
<EndComponent title="Congrats!" body="You found the heart!" level={11} turnOff={false}/>  ) : (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-b from-pink-600 via-pink-600 to-pink-400">
      <div
        className={`mt-6 mb-6 card bg-gradient-to-b from-pink-200 via-pink-100 to-pink-200 text-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full text-center transform transition-all duration-300 ease-in-out`}
      >
        <FadeInComponent delay={3000}>
          <h1 className="transition duration-300 ease-in-out text-4xl text-pink-600 font-bold mb-6 mt-6 hover:scale-115">
            Catarina
          </h1>
        </FadeInComponent>
        <FadeInComponent delay={100}>
          {
            <div className="flex justify-center items-center mb-6 transform transition duration-300 ease-in-out hover:scale-115 h-24 cursor-pointer">
              <FaHeart className="w-24 h-24 text-pink-600 animate-grow-shrink" />
              <TbActivityHeartbeat className="absolute w-16 h-16 text-pink-300 animate-pulse" />
            </div>
          }
        </FadeInComponent>
        <FadeInComponent delay={4000}>
          <p className="transition duration-300 ease-in-out text-2xl text-pink-600 mb-6 hover:scale-115 cursor-pointer">
            Will you be my Valentine?
          </p>
        </FadeInComponent>
        <div className="flex justify-center items-center gap-4 mt-6 mb-6">
          {
            <>
              <FadeInComponent delay={5000}>
                <button
                  onClick={handleYesClick}
                  className="bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg shadow-gray-400 hover:bg-pink-600 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer"
                >
                  Yes
                </button>
              </FadeInComponent>
              <FadeInComponent delay={5500}>
                <button
                  onClick={handleNoClick}
                  className="bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg shadow-gray-400 hover:bg-pink-600 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer"
                >
                  No
                </button>
              </FadeInComponent>
            </>
          }
        </div>
        <div className="flex justify-center items-center h-12 mb-6">
          <FadeInComponent delay={6000}>
            <p className="transition duration-300 ease-in-out text text-pink-600 hover:scale-115 cursor-pointer">
              {response}
            </p>
          </FadeInComponent>
        </div>
      </div>
    </div>
  );
}

export default Ten;
