// import React, { useState } from 'react'

// const Timeproject = () => {
//     let time = new Date().toLocaleTimeString();
//     const [Time,setTime] =useState(time)
//   return (
//     <>
//       <h1>{Time}</h1>
//      <button onClick={()=>setTime(time)}> click</button> 

//     </>
//   )
// }

// export default Timeproject

import React, { useEffect, useState } from 'react'
// import Clock from './Clock'
import Event from './Event'

const Timeproject = () => {
  const [number, setNumber] = useState([])

  const getApi = ()=>{
    fetch('https://jsonplaceholder.typicode.com/photos/10')
      .then(response => response.json())
      .then(json => setNumber(json))
  }

  useEffect(()=>{
    getApi();
  },[])
  // console.log(number);

  return (
    <div>
      <h1>parents - </h1>
      {/* <Clock value={number}/> */}
      <Event value={number}/>
    </div>
  )
}

export default Timeproject
