import Header from "../Components/Header";
import Scrolltop from "../Components/Scrolltop";
import Sidebar from "../Components/Sidebar";
import Dashboard from "../Screens/dashboard";
import React, {Component} from 'react';
import {Navigate} from "react-router-dom";
import Settings from "../Screens/settings";
import RatingForm from "../Screens/RatingForm";
class GiveRating extends Component {
   

  render() {
      // const token = sessionStorage.getItem('token');

      // if (token == null) {
      //     return <Navigate to={'/login'}/>
      // }


   return(<>
   <Header />
   <div id="wrapper">
      <Sidebar />
      <RatingForm />
   </div>
    <Scrolltop />
   </>) 
}}

export default GiveRating;
