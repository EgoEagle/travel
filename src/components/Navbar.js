import React from "react";
import logo from "../images/globe.png";
import Navbar from './components/Navbar.js';


export default function Navbar()
{
     return(
          <div>
               <nav className="navbar"> 
                    <img src={logo} />
                    <p> my travel journal</p>

               </nav>

          </div>


     )



}