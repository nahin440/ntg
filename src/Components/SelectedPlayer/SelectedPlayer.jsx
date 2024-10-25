import { MdDeleteForever } from "react-icons/md";

const SelectedPlayer = ({selectedPlayer,handleRemovePlayers}) => {

   

    // console.log(selectedPlayer.id)
    const {name,image,role,id} = selectedPlayer;
    return (
        <div>
            <div className="my-3 bg-slate-200 rounded-lg flex justify-between items-center ">
            
            <div className="flex  justify-start gap-5 items-center p-5" >
            <img className="w-[60px] h-[60px] rounded-full" src={image} alt="" />
                <div className="space-y-2">
                    <h1 className="text-xl font-bold"> {name} </h1>
                    <p> {role} </p>
                </div>
            </div>

            <div>
                <button onClick={() => handleRemovePlayers(id)} className="text-3xl text-lime-400 mr-5" > <MdDeleteForever></MdDeleteForever> </button>
            </div>


            </div>


            
        </div>
    );
};

export default SelectedPlayer;