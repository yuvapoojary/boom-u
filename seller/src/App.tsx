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

import AuthProvider, { useAuth } from './Providers/AuthProvider';
import AddRecommendation from './Pages/AddRecommendation';
import Recommendations from './Components/Recommendations';
import MyRecommendations from './Pages/Recommendations';
import Finances from './Pages/Finances';
import MyFollowers from './Pages/MyFollowers';
import Userguide from './Pages/UserGuide';
import Help from './Pages/Help';
import Review from './Pages/Review';
import Ratings from './Screens/Ratings';
import MyRatings from './Pages/MyRatings';

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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recommendations" element={<MyRecommendations />} />
      <Route
        path="/recommendation/:recommendationID"
        element={<RecommendationDetail />}
      />
      <Route path="/profile" element={<Profile />} />
      <Route
        path="/add-recommendation/:categoryID"
        element={<AddRecommendation />}
      />
      <Route path="/settings" element={<Profile />} />
      <Route path="/finances" element={<Finances />} />
      <Route path="/followers" element={<MyFollowers />} />
      <Route path="/help-and-support" element={<Help />} />
      <Route path="/user-guide" element={<Userguide />} />
      <Route path="/reviews" element={<Review />} />
      <Route path="/rating" element={<MyRatings />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/recommender">
        <AuthProvider>
          <Navigation />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
