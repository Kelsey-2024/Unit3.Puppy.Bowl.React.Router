import { useEffect, useState } from 'react'
import PlayerCard from './PlayerCard.jsx'
import SinglePlayerCardDetails from './SinglePlayerCardDetails.jsx';
import './index.css';

const AllPlayers = ({baseUrl}) => {
  const [allPlayersList, setAllPlayersList] = useState([]);
  const [playerDetails, setPlayerDetails] = useState({});
  
  useEffect(() => {
    getAllPlayers();
  }, []);

  const getAllPlayers = async() => {
    try{
      const response = await fetch(`${baseUrl}/players`);
      const result = await response.json();
      setAllPlayersList(result.data.players);
      //console.log(allPlayersList);
    } catch (error) {
      console.log(`ERROR while fetching API`, error);
    }
  }

  return ( 
    playerDetails.name 
    ? <SinglePlayerCardDetails /> 
    :
    <> 
      <div>
        {
          allPlayersList.map((currentPlayer) => {
          return <PlayerCard key={currentPlayer.id} currentPlayer={currentPlayer} />
          })
        }
      </div> 
    </>
  )
}

export default AllPlayers;