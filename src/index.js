import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from "./data.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

const dataElements = data.map( element => {
  return <Card title={element.title} openSpots={element.openSpots} review={element.stats.reviewCount} location={element.location}price={element.price} rating={element.stats.rating} coverImg={element.coverImg} />
})



function Page()
{




  return (
    <div>
        
        
    </div>



  )

}



root.render(<Page />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
