
import { useState,useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/main/Main'
import Players from './Components/Players/Players'
import Selected from './Components/Sselected/Selected'
import Player from './Components/Player/Player'
import SelectedPlayer from './Components/selectedPlayer/selectedPlayer'



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
    alert('nois')
  }

  

  const handleSelectedPlayers = (player) => {

    
    // console.log(player.biddingPrice)

    if (selectedPlayers.find(p => p.id === player.id)){
      
      alert('nois')
      return;
    }
    else{ 
 
    setSelectedPlayers([...selectedPlayers,player]); 
    
    alert('nois')


        setClaimCoins (claimCoins >= player.biddingPrice ? claimCoins - player.biddingPrice : claimCoins) ;
    
    }
  }

  const handleRemovePlayers = id => {
    const remainingPlayers = selectedPlayers.filter(SelectedPlayer => SelectedPlayer.id !== id);
    setSelectedPlayers(remainingPlayers);
    alert('nois')
  }

  

  return (
    <>
     <div>
        <Header handleClaimCoins={handleClaimCoins} handleSelectedPlayers={handleSelectedPlayers}  claimCoins={claimCoins}></Header>
     </div>
     <Main   selectedPlayers={selectedPlayers}  ></Main>
     
     <div>
      {
        activeSection === 'available' &&
        <Players players={players} handleSelectedPlayers={handleSelectedPlayers} activeSection={activeSection} ></Players>
      }
     

    </div> 

    <div>

      {
        activeSection === 'selected' &&
        <Selected selectedPlayers={selectedPlayers} handleRemovePlayers={handleRemovePlayers} ></Selected>
      }

      { activeSection === 'selected' && <div className='md:w-10/12 w-11/12 mx-auto mt-5'>
          <button onClick={showAvailable} className='py-3  px-6 rounded-lg hover:bg-lime-400 text-black font-bold border' >Add more players</button>
      </div>}
      
      
    </div>


   
    </>
  )
}

export default App
