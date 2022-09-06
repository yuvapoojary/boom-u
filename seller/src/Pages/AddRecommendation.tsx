import Header from "../Components/Header";
import Scrolltop from "../Components/Scrolltop";
import Sidebar from "../Components/Sidebar";
import Dashboard from "../Screens/dashboard";
import React, {Component} from 'react';
import {Navigate} from "react-router-dom";
import RecommendationForm from "../Screens/AddRecommendationForm";
class AddRecommendation extends Component {
   

  render() {
      // const token = sessionStorage.getItem('token');

      // if (token == null) {
      //     return <Navigate to={'/login'}/>
      // }


   return(<>
   <Header />
   <div id="wrapper">
      <Sidebar />
      <RecommendationForm />
   </div>
    <Scrolltop />
   </>) 
}}

export default AddRecommendation;
