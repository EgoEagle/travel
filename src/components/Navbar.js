import React from "react";
import logo from "../images/globe.png";


export default function Navbar()
{
     return(
          <div>
               <nav className="navbar"> 

                    <img src={logo} className="globe"/>
                    <p> my travel journal</p>


               </nav>

          </div>


     )



}