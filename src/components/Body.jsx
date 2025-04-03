import Buttons from "./Buttons";
import Monitor from "./Monitor";


function Body(){
    return (
        <div className="border w-[250px] gap-[15px] h-[390px] rounded-xl flex flex-col items-center justify-center">

            <Monitor/>
            <Buttons/>

        </div>
    );
}

export default Body