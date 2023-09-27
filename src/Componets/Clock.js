// import React, { useState } from 'react'

// const Clock = () => {
//     let Time = new Date().toLocaleTimeString();
//      const [cTime , setcTime] = useState(Time);
//      const Updatetime = () =>{
//         let Time = new Date().toLocaleTimeString();
//         setcTime(Time)
//      }
//      setInterval(Updatetime,1000);
//   return (
//     <div>
//       <h1> {cTime}</h1>
//     </div>
//   )
// }

// export default Clock


import React from 'react'
import Event from './Event'

const Clock = (props) => {
  console.log(props.value);
  return (
    <div>
      <h1>Chaild - </h1>
      <img src=''/>
      {/* <Event abc={props.value}/> */}
    </div>
  )
}

export default Clock
