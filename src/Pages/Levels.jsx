import { FadeInComponent } from '../Components/FadeInComponent';
import { FaHeart } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Levels() {
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("level") === null)
        {
            navigate('/1');
        }
    }, [navigate]);

  const levels = [
    { name: "Invite Accepted ❤️", level: 1 },
    { name: "Button Masher 🔘", level: 2 },
    { name: "Owa Owa 🎲", level: 3 },
    { name: "James Says 💬", level: 4 },
    { name: "Fast Math ➕ ✖️ ➖", level: 5 },
    { name: "Don't Blink 👀", level: 6 },
    { name: "Drop The Ball 🪩", level: 7 },
    { name: "Count Your Lucky Stars ⭐", level: 8 },
    { name: "Stacker 🟦 🟦 🟦", level: 9 },
    { name: "❤️", level: 10, icon: <FaHeart className="w-6 h-6 text-pink-600 animate-grow-shrink" /> }
  ];

  const getLevelStatus = (level) => {
    const currentLevel = parseInt(localStorage.getItem("level"));
    if (currentLevel > level) return "✅";
    if (currentLevel === level) return "🟢";
    return "🔒";
  };

  const handleLevelClick = (level) => {

    if(localStorage.getItem("level") === null)
    {
      return;
    }

    let myLevel = parseInt(localStorage.getItem("level"));

    if(myLevel)
    {
        if(level <= myLevel)
        {
          navigate(`/${level}`);
        }

        if(level === 11)
        {
          navigate(`/${11}`);
        }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-pink-600 via-pink-600 to-pink-400">
      <div className="mt-6 mb-6 card bg-gradient-to-b from-pink-200 via-pink-100 to-pink-200 text-gray-800 shadow-2xl rounded-lg p-8 max-w-lg w-full text-left transform transition-all duration-300 ease-in-out">
        <FadeInComponent>
          <h1 className="flex justify-center transition duration-300 ease-in-out text-4xl text-pink-600 font-bold mb-6 hover:scale-115 cursor-pointer">
            Levels
          </h1>
          <div className="flex justify-center">
            <ol className="space-y-6">
              {levels.map((item) => (
                <li 
                  key={item.level} 
                  className="transition duration-300 ease-in-out text-lg text-pink-600 hover:scale-115 cursor-pointer flex items-center"
                  onClick={() => handleLevelClick(item.level)} // Add the onClick event handler
                >
                  {item.icon ? (
                    <>
                      {item.level}. 
                      <div className="flex-grow justify-center mr-4 items-center">
                        <span role="button" className="flex items-center justify-center transform transition duration-300 ease-in-out hover:scale-155 h-6 cursor-pointer">
                          {item.icon}
                          <TbActivityHeartbeat className="absolute w-5 h-5 text-pink-300 animate-pulse" />
                        </span>
                      </div>
                    </>
                  ) : 
                    (
                      <div className="flex-grow justify-center mr-4 items-center">
                        <span role="button" className="flex-grow items-center justify-center ml-2">{item.level}. {item.name}</span>
                      </div>
                      
                    )
                  }
                  <span role="button">{getLevelStatus(item.level)}</span>
                </li>
              ))}
              <li 
                      key={levels.length + 1} 
                      className="transition duration-300 ease-in-out text-lg text-pink-600 hover:scale-115 cursor-pointer flex items-center"
                      onClick={() => handleLevelClick(levels.length + 1)} // Add the onClick event handler
                    >
                      <div className="flex-grow justify-center items-center mt-6">
                          <span role="button" className="flex items-center justify-center">Restart ↻ </span>
                      </div>
                      </li>
            </ol>
          </div>
        </FadeInComponent>
      </div>
    </div>
  );
}

export default Levels;
