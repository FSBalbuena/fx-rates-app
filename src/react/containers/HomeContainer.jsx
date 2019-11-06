import React from 'react';
import Home from '../components/Home/'

export default ()=>{
  const text={
          header:"Manage all the Foreign Exchanges in one place",
          button:"Start Free",
          href:"/rates"
      }
  
    return <Home text={text}/>
}