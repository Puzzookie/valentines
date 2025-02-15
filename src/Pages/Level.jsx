import { useParams } from 'react-router-dom';
import One from './One.jsx';
import Two from './Two.jsx';
import Three from './Three.jsx';
import Four from './Four.jsx';
import Five from './Five.jsx';
import Six from './Six.jsx';
import Seven from './Seven.jsx';
import Eight from './Eight.jsx';
import Nine from './Nine.jsx';
import Ten from './Ten.jsx';
import Restart from './Restart.jsx';
import NoMatch from './NoMatch.jsx';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Level = () => {
  const { level } = useParams();
  const levelNumber = parseInt(level, 10); // Convert the level to a number
 
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("level") === null)
    {
        navigate('/1');
    }

    let myLevel = parseInt(localStorage.getItem("level"));

    if(myLevel)
    {
        if(levelNumber > myLevel && levelNumber != 11)
        {
            navigate(`/`);
        }
    }
  }, [navigate]);

  switch (levelNumber) {
    case 1:
      return <One />;
    case 2:
      return <Two />;
    case 3:
      return <Three />;
    case 4:
      return <Four />;
    case 5:
      return <Five />;
    case 6:
      return <Six />;
    case 7:
      return <Seven />;
    case 8:
      return <Eight />;
    case 9:
      return <Nine />;
    case 10:
      return <Ten />;
    case 11:
      return <Restart />
    default:
      return <NoMatch />;
    }
};

export default Level;
