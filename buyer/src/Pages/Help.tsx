import Header from "../Components/Header";
import Scrolltop from "../Components/Scrolltop";
import Sidebar from "../Components/Sidebar";
import Dashboard from "../Screens/dashboard";
import React, {Component} from 'react';
import {Navigate} from "react-router-dom";
import HelpForm from "../Screens/Help";
class Help extends Component {
   

  render() {
      // const token = sessionStorage.getItem('token');

      // if (token == null) {
      //     return <Navigate to={'/login'}/>
      // }


   return(<>
   <Header />
   <div id="wrapper">
      <Sidebar />
      <HelpForm />
   </div>
    <Scrolltop />
   </>) 
}}

export default Help;
