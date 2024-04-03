import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import AllPlayers from './components/AllPlayers.jsx';
import AddPlayerForm from './components/AddPlayerForm.jsx';
import SinglePlayerCardDetails from './components/SinglePlayerCardDetails.jsx';
import './app.css'

const COHORT_NAME = `2402-FTB-ET-WEB-FT`;
const BASE_API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_NAME}`;

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allPlayers' element={<AllPlayers baseUrl={BASE_API_URL}/>}></Route>
        <Route path='/additionalPlayerForm' element={<AddPlayerForm baseUrl={BASE_API_URL} />}></Route>
        <Route path='/player/:singlePlayerId' element={<SinglePlayerCardDetails baseUrl={BASE_API_URL}/>} />
      </Routes>
    </>
  )
}

export default App;
