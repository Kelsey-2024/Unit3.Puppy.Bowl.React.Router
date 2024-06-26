import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './index.css';

const SinglePlayerCardDetails = ({ baseUrl }) => {
  const log = console.log;
  const [player, setPlayer] = useState([]);
  const navigate = useNavigate();
  const { singlePlayerId } = useParams();

  const fetchSinglePlayer = async () => {
    try{
      const response = await fetch (`${baseUrl}/players/${singlePlayerId}`);
      const result = await response.json();
      setPlayer(result.data.player);
    } catch (error){
      log(error);
    }
  }

  useEffect(()=>{
    fetchSinglePlayer();
  }, []);

  return(
    <>
      <div id="seeDetailsPage">
        <p>{player.breed}</p>
        <p>{`Field Status: ${player.status}`}</p> 
        <br />
        <button onClick={() => navigate("/allPlayers")}>Go Back</button>
      </div>
    </>
  )
}

export default SinglePlayerCardDetails;