import Header from "../Components/Header";
import Scrolltop from "../Components/Scrolltop";
import Sidebar from "../Components/Sidebar";
import AddPortfolioForm from "../Screens/AddPortfolioForm";
import Settings from "../Screens/settings";

export default function AddPortfolio(){
    return(<>
        <Header />
        <div id="wrapper">
           <Sidebar />
            <AddPortfolioForm  />
        </div>
         <Scrolltop />
        </>
        
        )
}