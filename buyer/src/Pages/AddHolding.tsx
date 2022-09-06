import Header from "../Components/Header";
import Scrolltop from "../Components/Scrolltop";
import Sidebar from "../Components/Sidebar";
import AddHoldingForm from "../Screens/AddHoldingForm";


export default function AddHolding(){
    return(<>
        <Header />
        <div id="wrapper">
           <Sidebar />
            <AddHoldingForm  />
        </div>
         <Scrolltop />
        </>
        
        )
}