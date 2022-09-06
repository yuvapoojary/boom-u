import Header from "../Components/Header";
import Scrolltop from "../Components/Scrolltop";
import Sidebar from "../Components/Sidebar";

import DetailRecommendation from "../Screens/RecommendationDetail";

export default function RecommendationDetail(){
   return(<>
   <Header />
   <div id="wrapper">
      <Sidebar />
      <DetailRecommendation />
   </div>
    <Scrolltop />
   </>) 
}