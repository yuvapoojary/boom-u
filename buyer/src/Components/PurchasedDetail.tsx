import Header from "../Components/Header";
import Scrolltop from "../Components/Scrolltop";
import Sidebar from "../Components/Sidebar";
import PurchasedDetailRecommendation from "../Screens/PurchasedRecommendationDetail";



export default function PurchasedDetail(){
   return(<>
   <Header />
   <div id="wrapper">
      <Sidebar />
      <PurchasedDetailRecommendation />
   </div>
    <Scrolltop />
   </>) 
}