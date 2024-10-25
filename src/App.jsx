
import { useState,useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/main/Main'
import Players from './Components/Players/Players'
import Selected from './Components/Sselected/Selected'
import Player from './Components/Player/Player'
import SelectedPlayer from './Components/selectedPlayer/selectedPlayer'
import Footer from './Components/Footer/Footer'

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
   
    setClaimCoins(claimCoins + 8900)
    toast.success(" 8900 coin added", {
      position: "top-center",
      autoClose: 1500 
      } );
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

    setClaimCoins (claimCoins - player.biddingPrice) ;
    // console.log(player.biddingPrice)

    if (selectedPlayers.find(p => p.id === player.id)){
      
      toast.error(" you can not choose a player more than once ", {
        position: "top-center",
        autoClose :2000
          } );
      return;
    }

    else if(selectedPlayers.length >= 6){
      
      toast.error(" you cannot choose more than six players", {
        position: "top-center",
        autoClose :2000
          } );
      
      return;
    }
    else if(claimCoins< player.biddingPrice){
      
      toast.warning(" You don't have enough money ", {
        position: "top-center",
        autoClose :2000
          } );
      
      return;
    }
    
    else{ 
 
    setSelectedPlayers([...selectedPlayers,player]); 
    
    toast.success(" player has been chosen ", {
      position: "top-center",
      autoClose :2000
        } );
    
    }
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

      {
        activeSection === 'selected' &&
        <Selected selectedPlayers={selectedPlayers} handleRemovePlayers={handleRemovePlayers} ></Selected>
      }

      { activeSection === 'selected' && <div className='md:w-10/12 w-11/12 mx-auto mt-5'>
          <button onClick={showAvailable} className='py-3  px-6 rounded-lg hover:bg-lime-400 text-black font-bold border' >Add more players</button>
      </div>}
      
      
    </div>


    <div>
      <Footer></Footer>
    </div>
    </>
  )
}

export default App
