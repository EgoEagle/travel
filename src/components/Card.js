import React from "react";
import star from "../images/star.png";



export default function Card(prop)
{

     return(
          <div className="cardBox">
               {prop.openSpots === 0 && <div className="cardBadge">SOLD OUT</div>}
               <img src={`${process.env.PUBLIC_URL}/images/${prop.coverImg}`} className="cardImage"/>
               <div className="cardStat">
                    <img src={star} className="star" />
                    <span> {prop.rating} </span>
                    <span className="gray"> ({prop.review}) • </span>
                    <span className="gray"> {prop.location} </span>
               </div>
               <p>{prop.title}</p>
               <p>From <strong>${prop.price}</strong> / person</p>
          </div>


     )


}