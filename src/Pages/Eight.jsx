import { useState, useEffect } from "react";
import { FadeInComponent } from "../Components/FadeInComponent";
import { NextComponent } from "../Components/NextComponent";

function Eight() {
  const [showNext, setShowNext] = useState(false);

  const [zeroTranslate, setZeroTranslate] = useState("-translate-x-192 translate-y-0");
  const [firstTranslate, setFirstTranslate] = useState("-translate-x-192 translate-y-0");
  const [secondTranslate, setSecondTranslate] = useState("translate-x-192 translate-y-0");

  const [emojis, setEmojis] = useState(["⭐", "😃"]);
  const [round, setRound] = useState(1);
  const [count, setCount] = useState(0);
  const [numOfStars, setNumOfStars] = useState(0);

  const generateRandomEmojis = () => {
    let emojiString = "";
    let lastFourEmojis = []; // To track the last 4 emojis
  
    for (let i = 0; i < 25; i++) {
      let randomEmoji;
  
      // Keep generating a random emoji until it's not the same as the last 4
      do {
        const randomIndex = Math.floor(Math.random() * emojis.length);
        randomEmoji = emojis[randomIndex];
      } while (
        lastFourEmojis.filter(emoji => emoji === randomEmoji).length >= 4
      );
  
      // Append the emoji to the string
      emojiString += randomEmoji;
  
      // Update the last four emojis
      lastFourEmojis.push(randomEmoji);
      if (lastFourEmojis.length > 4) {
        lastFourEmojis.shift(); // Remove the oldest emoji to keep track of only the last 4
      }
    }
  
    return emojiString;
  };
  

  const [emojiSequence, setEmojiSequence] = useState("");  // Set the initial emoji sequence

  // Timer state to track the countdown
  const [timer, setTimer] = useState(0);

  // Handle the timer countdown effect
  useEffect(() => {
    if (timer > 0) {
      const timerId = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId); // Cleanup on component unmount or timer change
    }
    else if(timer === 0)
    {
      if(emojiSequence.length > 0)
      {
        let countStars = 0;
        for(let i = 0; i < emojiSequence.length; i++)
          {
            if(emojiSequence[i] === emojis[0])
              {
                  countStars++;
              }
          }
          if(countStars === count)
            {
              if(round === 3)
              {
                  setShowNext(true);
              }
              else
              {
                setRound(round + 1);
              }
            }
            else
            {
              setRound(1);
            }
            setNumOfStars(countStars);
            setTimer(0);
      }
    }
  }, [timer]);

  const handleStartClick = () => {
    if(timer > 0)
    {
      setCount(count + 1);
    }
    else
    {
      if (firstTranslate === zeroTranslate) {
        setFirstTranslate(secondTranslate);
        setEmojiSequence(generateRandomEmojis());
      } else {
        setFirstTranslate(zeroTranslate);
        setEmojiSequence(generateRandomEmojis());
      }
      setCount(0);
      setTimer(8);
    }
  };

  return showNext ? (
    <NextComponent title="Great job! You can really count..." body="...on me 😉" level={9} />
  ) : (
    <div className="flex justify-center min-h-screen items-center bg-gradient-to-b from-pink-600 via-pink-600 to-pink-400">
      <div
        className="mt-6 mb-6 card bg-gradient-to-b from-pink-200 via-pink-100 to-pink-200 text-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full text-center relative overflow-hidden"
      >
        <FadeInComponent>
          <h1 className="transition duration-300 min-h-36 ease-in-out text-4xl text-pink-600 font-bold mb-6 mt-6 hover:scale-115 cursor-pointer">
            {timer > 0 ? "Click the button every time you see a ⭐" : numOfStars > 0 ? (numOfStars === count) ? `${count} is correct. Great job!` : `You counted ${count} but there were ${numOfStars}` : "Count Your Lucky Stars"}
          </h1>
          <div className="relative flex justify-center items-center mt-18 mb-18">
            <button
              className={`transition-all ease-in-out transform p-4 bg-pink-500 text-white text-4xl rounded-md absolute ${secondTranslate} hover:scale-115 cursor-pointer`}
            >
              0
            </button>
            <button
              className={`transition-all min-w-18 min-h-18 max-h-18 duration-9000 transform p-4 bg-pink-500 text-white text-4xl rounded-md absolute ${firstTranslate} hover:scale-115 cursor-pointer flex items-center whitespace-nowrap`}
            >
              {emojiSequence} {/* Display the random emoji sequence */}
            </button>
            <button
              className={`transition-all ease-in-out transform p-4 bg-pink-500 text-white text-4xl rounded-md absolute ${secondTranslate} hover:scale-115 cursor-pointer`}
            >
              2
            </button>
          </div>
          <button
            onClick={handleStartClick}
            className="min-h-14 bg-pink-500 text-white px-8 py-4 rounded-full shadow-lg shadow-gray-400 hover:bg-pink-600 transform transition duration-300 ease-in-out hover:scale-115 cursor-pointer"
          >
          {timer > 0 ? count : "Start"}
          </button>

          {/* Display the timer */}
          <div className="mt-4 text-2xl text-pink-600">
            Round {round}
          </div>
          <div className="mt-4 text-2xl text-pink-600">
            Goal: Finish Round 3
          </div>
        </FadeInComponent>
      </div>
    </div>
  );
}

export default Eight;
