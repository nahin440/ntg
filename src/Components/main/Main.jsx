

const Main = ({selectedPlayers,showSelected,showAvailable}) => {
    const players = selectedPlayers.length;
    
    
    return (
        <div className="md:w-10/12 w-11/12 mx-auto">
            <div className="md:flex justify-between items-center space-y-4 my-10">
                <h1 className="text-2xl font-bold">
                    Available players
                </h1>

                <div className="space-x-3">
                    <button onClick={showAvailable} className="py-3 px-6 rounded-lg hover:bg-lime-400 text-black font-bold border">
                        Available
                    </button>


                    <button onClick={showSelected} className="py-3 px-6 rounded-lg hover:bg-lime-400 text-black font-bold border">
                        Selected ({players}) 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Main;