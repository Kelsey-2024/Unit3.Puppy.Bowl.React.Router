import { Link } from 'react-router-dom'

const NavBar = () => {
  return(
    <>
      <div id="navbar">
        <Link to='/'>Home</Link>
        <Link to='/allPlayers'>2024 Roster</Link>
        <Link to='additionalPlayerForm'>Add a Player</Link>
      </div>
    </>
  )
}

export default NavBar;