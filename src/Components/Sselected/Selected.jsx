import SelectedPlayer from "../selectedPlayer/selectedPlayer";




const Selected = ({selectedPlayers,handleRemovePlayers}) => {
        // const players = selectedPlayers;
    return (
        <div className="mt-5 md:w-10/12 w-11/12 mx-auto">
            <h1 className="font-bold text-2xl">Selected players : {selectedPlayers.length}/6</h1>

            {
                selectedPlayers.map(selectedPlayer => <SelectedPlayer key={selectedPlayer.id} handleRemovePlayers={handleRemovePlayers} selectedPlayer={selectedPlayer} ></SelectedPlayer>)
            }
            
        </div>
    );
};

export default Selected;






