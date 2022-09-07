import Home from './Pages/Home';
import RecommendationDetail from './Pages/RecommendationDetail';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
  Navigate,
} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Verify from './Pages/Verify';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';

import Portfolio from './Pages/Portfolio';
import Purchases from './Pages/Purchases';
import AuthProvider, { useAuth } from './Providers/AuthProvider';
import Success from './Pages/Success';

import PurchasedDetail from './Components/PurchasedDetail';
import AddPortfolio from './Pages/AddPortfolio';
import AddHolding from './Pages/AddHolding';
import Holdings from './Pages/Holdings';
import Holding from './Pages/Holdings';
import Help from './Pages/Help';
import Refer from './Pages/Refer';
import Collections from './Pages/Collections';
import GiveRating from './Pages/GiveRating';

const Navigation = () => {
  const auth = useAuth();

  console.log(auth);

  if (auth.isLoading) return <div>Loading...</div>;

  if (!auth.isAuthenticated)
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/recommendation/:recommendationID"
        element={<RecommendationDetail />}
      />
      <Route
        path="/purchasedrecommendation/:recommendationID/:orderID"
        element={<PurchasedDetail />}
      />
      <Route path="/profile" element={<Profile />} />
      <Route path="/purchases" element={<Purchases />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/add-portfolio" element={<AddPortfolio />} />
      <Route path="/add-holding/:portfolioId" element={<AddHolding />} />
      <Route path="/holdings/:portfolioId" element={<Holding />} />
      <Route path="/settings" element={<Profile />} />
      <Route path="/success" element={<Success />} />
      <Route path="/support" element={<Help />} />
      <Route path="/refer-a-friend" element={<Refer />} />
      <Route path="/collections/:sellerId" element={<Collections />} />
      <Route path="/give-rating/:sellerId" element={<GiveRating />} />
    </Routes>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/buyer">
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
