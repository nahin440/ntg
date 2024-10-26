
import { useState,useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/main/Main'
import Players from './Components/Players/Players'
import Selected from './Components/Sselected/Selected'
import Player from './Components/Player/Player'
import SelectedPlayer from './Components/selectedPlayer/selectedPlayer'
import Foter from './Components/Footer/Footer'


function App() {


  const [players,setPlayers] = useState ([]);

  useEffect(() =>{
      
      fetch('players.json')
      .then(res => res.json())
      .then(data => setPlayers(data));


  },[]);

  const [selectedPlayers,setSelectedPlayers] = useState ([])

  const [activeSection,setActiveSection] = useState('available')

  let [claimCoins,setClaimCoins] = useState(0)

  const handleClaimCoins = () => {
   
    setClaimCoins(claimCoins + 18900)
    
  }

  const showAvailable = () => {
    setActiveSection('available')
    // console.log('hoise avail')
  }
  const showSelected = () => {
    setActiveSection('selected')
    // console.log('hoise select')
  }

  const handleSelectedPlayers = (player) => {

    
    // console.log(player.biddingPrice)

    if (selectedPlayers.find(p => p.id === player.id)){
      
      
      return;
    }
    
     
 
    setSelectedPlayers([...selectedPlayers,player]); 
    setClaimCoins (claimCoins >= player.biddingPrice ? claimCoins - player.biddingPrice : claimCoins) ;
    
    
  }

  const handleRemovePlayers = id => {
    const remainingPlayers = selectedPlayers.filter(SelectedPlayer => SelectedPlayer.id !== id);
    setSelectedPlayers(remainingPlayers);
    
  }

  

  return (
    <>
     <div>
        <Header handleClaimCoins={handleClaimCoins} handleSelectedPlayers={handleSelectedPlayers}  claimCoins={claimCoins}></Header>
     </div>
     <Main  showAvailable={showAvailable} selectedPlayers={selectedPlayers} showSelected={showSelected}  ></Main>
     
     <div>
      {
        activeSection === 'available' &&
        <Players players={players} handleSelectedPlayers={handleSelectedPlayers} activeSection={activeSection} ></Players>
      }
     

    </div> 

    <div>

      
        <Selected selectedPlayers={selectedPlayers} handleRemovePlayers={handleRemovePlayers} ></Selected>
      

       <div className='md:w-10/12 w-11/12 mx-auto mt-5'>
          <button onClick={showAvailable} className='py-3  px-6 rounded-lg hover:bg-lime-400 text-black font-bold border' >Add more players</button>
      </div>
      
      
    </div>


    <div>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
