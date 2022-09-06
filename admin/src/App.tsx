import React from 'react';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from 'react-router-dom';
import './http-common';
import AddSubCategories from './Components/SubCategories/AddSubCategories';
import AddRecommender from './Pages/AddRecommender';
import Buyers from './Pages/Buyer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Orders from './Pages/Orders';
import Revenue from './Pages/Revenue';
import Sellers from './Pages/Sellers';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/admin">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/buyers" element={<Buyers />} />
          <Route path="/recommenders" element={<Sellers />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/add-recommender" element={<AddRecommender />} />
          <Route path="/add-sub-category" element={<AddSubCategories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
