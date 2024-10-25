import { useEffect, useState } from "react";
import Player from "../Player/Player";


const Players = ({handleSelectedPlayers,activeSection,players}) => {



    return (
        <div className="md:w-10/12 w-11/12 mx-auto">
            {activeSection === 'available'}
            <div>
            <h1>
                Available Players : {players.length}
                
            </h1>

            <div className="grid md:grid-cols-3 items-center justify-center gap-5">
            {
                    players.map(player => <Player key={player.id} player={player} handleSelectedPlayers={handleSelectedPlayers} ></Player>)
            }
            </div>
            

        </div>
        </div>
    );
};

export default Players;