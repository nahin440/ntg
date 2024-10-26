

const Main = ({selectedPlayers}) => {
    const players = selectedPlayers.length;
    
    
    return (
        <div className="md:w-10/12 w-11/12 mx-auto">
            <div className="md:flex justify-between items-center space-y-4 my-10">
                <h1 className="text-2xl font-bold">
                    Available players
                </h1>

                <div className="space-x-3">
                    <button  className="py-3 px-6 rounded-lg  border">
                        Available
                    </button>


                    <button className="py-3 px-6 rounded-lg border">
                        Selected ({players}) 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Main;