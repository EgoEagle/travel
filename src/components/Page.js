import React from 'react';
import Navbar from './Navbar.js';
import Card from './Card.js';
import data from "../data.js";



export default function Page()
{
  const dataElements = data.map( element => {
    return (
    <Card {...element} />
    )
  })



  return (
    <div>
        <Navbar />
        <section> {dataElements} </section>
    </div>



  )

}