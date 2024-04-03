import { Link } from 'react-router-dom';
import './index.css';

const PlayerCard = ({ currentPlayer, setPlayerDetails }) => {
  const BASE_API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT`;
  
  // const handleClick = () => {
  //   setPlayerDetails(currentPlayer);
  // }

  const puppyRemoval = async() => {
    try{
      const response = await fetch (`${BASE_API_URL}/players/${currentPlayer.id}`, {
      method: "DELETE",
      });
      const result = await response.json();
      console.log(result);
    } catch (error){
      console.log(`ERROR caught when deleting a puppy!`, error);
    }
  }

  return (
    <>
      <div className="currentPlayerCard">
        <h3>{currentPlayer.name}</h3>
        <img id="playerImg" src={currentPlayer.imageUrl}/>
        <Link to={`/player/${currentPlayer.id}`}>See Details</Link>
        
        <button onClick={puppyRemoval}>Adopt a Puppy!</button>
      </div>
    </>
  )
}

export default PlayerCard;