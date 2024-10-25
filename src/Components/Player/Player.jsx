import { FaUserCircle } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Player = ({player,handleSelectedPlayers}) => {
    const {name,image,id,nationality,role,battingType,bowlingType,biddingPrice} = player
    
    return (
        <div className="p-3 rounded-lg border space-y-3  ">
            <div className="  rounded-3xl border">
                <img className="p-2 w-[200px] h-[200px] rounded-3xl mx-auto " src={image} alt="" />
            </div>
            <div className="flex justify-start gap-3 items-center" > 
                <button className="text-xl"> <FaUserCircle></FaUserCircle> </button>
                <h1> {name} </h1>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex justify-start gap-3 items-center">
                    <button className="text-xl"> <FaFlag></FaFlag> </button>
                    <h3> {nationality} </h3>
                </div>
                <p className="p-1 rounded-md bg-stone-200" > {role} </p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
                <h1> Batting Type :  </h1>
                <h1> {battingType} </h1>
            </div>
            <div className="flex justify-between items-center">
                <h1> Bowling Type :  </h1>
                <h1> {bowlingType} </h1>
            </div>
            <div className="flex justify-between items-center">
                <p>Price : {biddingPrice} </p>
                <div>
                    <button onClick={() => handleSelectedPlayers(player)} className="py-1 px-3 rounded-lg bg-lime-400 text-black font-bold  border " >Choose Player</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Player;