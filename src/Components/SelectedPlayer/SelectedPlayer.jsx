import { MdDeleteForever } from "react-icons/md";

const SelectedPlayer = ({selectedPlayer,handleRemovePlayers}) => {

   

    // console.log(selectedPlayer.id)
    const {name,image,role,id,biddingPrice} = selectedPlayer;
    return (
        <div>
            <div className="my-3 bg-slate-200 rounded-lg flex justify-between items-center ">
            
            <div className="flex  justify-start gap-5 items-center p-5" >
                <img className="w-[100px] h-[100px] rounded-full" src={image} alt="" />
                <div className="space-y-2">
                    <h1 className="text-xl font-bold"> {name} </h1>
                    <p> {role} </p>
                    <p> Price : {biddingPrice} </p>
                </div>
            </div>

            <div>
                <button onClick={() => handleRemovePlayers(id)} className="text-3xl text-lime-400 mr-5 border-b-4 rounded-lg border-red-700 " > <MdDeleteForever></MdDeleteForever> </button>
            </div>


            </div>


            
        </div>
    );
};

export default SelectedPlayer;