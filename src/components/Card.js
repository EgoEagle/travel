import React from "react";
import cursor from "../images/cursor.png";

export default function Card(prop)
{

     return(
          <div className="cardBox">
               <img src={prop.imageUrl} className="cardImage"/>
               <div className="cardStat">

                    <div className="cardBox--location">
                         <img className="cursor" src={cursor}/>
                         <p> {prop.location} </p>
                         <a href={prop.googleMapsUrl}> View on Google Maps</a>
                    </div>
               <h2> {prop.title}</h2>
               <div className="textBox">
                    <div className="date">
                    <p> {prop.startDate} </p>
                    <p>- </p>
                    <p> {prop.endDate} </p>
                    </div>
               <p className="text">  {prop.description} </p>
               </div>
               </div>
          </div>


     )


}