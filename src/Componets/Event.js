// import React, { useState } from "react";

// const Event = () =>{
//     const color = "Yellow";
//    const [Bg,setBg] = useState(color)
//     const changeColor= ()=>{
//       const color = "red";

      
//         setBg(color)
//     }
   
//     return(
//         <>
//         <div style={{backgroundColor:Bg}}>
//            <button onClick={changeColor}>clickhere</button>
//         </div>
//         </>
//     )
// }
// export default Event;

import React from 'react'

const Event = (props) => {
    console.log(props.value);
  return (
    <div>
      <h1>Sub Chaid - {props.value.id}</h1>
      <img src={props.value.thumbnailUrl}/>
    </div>
  )
}

export default Event
