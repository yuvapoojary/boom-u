import Header from "../Components/Header";
import Scrolltop from "../Components/Scrolltop";
import Sidebar from "../Components/Sidebar";
import BuyerPurchases from "../Screens/purchases";

export default function Purchases(){
      return(<>
            <Header />
            <div id="wrapper">
               <Sidebar />
               <BuyerPurchases />
            </div>
             <Scrolltop />
            </>) 
}
