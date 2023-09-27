import React from "react";

const Loginform = () =>{
    
    
    return (
      <>
        <h1>Loginform</h1>

        <div className="main-body">
        {/* <form onSubmit={submitHandler}> */}
          <label>Name:</label>
          <input type="text" placeholder=""></input>
          <br></br>
          <label>Password</label>
          <input type="text"></input><br></br>
          <button type="submit">submit</button>
          {/* </form> */}
        </div>
      </>
    );
}
export default Loginform;