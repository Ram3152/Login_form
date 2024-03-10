import React, { useState } from "react";
import "./App.css";
const App =()=>{
const[name,setname]=useState( {
  fname:"",
  lname:"",
  email:"",
 Phone:"",
 Text:"",
});


  const update=(event)=>{
    const {value,name} =event.target;
    setname((preValue)=>{
      return{
      ...preValue,
      [name] : value,
      };
      // if(name=== "fname"){
      //   return{
      //     fname:value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //    Phone: preValue.Phone,
      //   };
      // }
      // else if(name==="lname"){
      //   return{
      //      fname: preValue.fname,
      //      lname: value,
      //      email: preValue.email,
      //    Phone: preValue.Phone,
      //   };
      // }
      // else if(name==="email"){
      //   return{
      //      fname: preValue.fname,
      //      lname: preValue.email,
      //      email: value,
      //    Phone: preValue.Phone,
      //   };
      // }
      // else if(name==="Phone"){
      //   return{
      //      fname: preValue.fname,
      //      lname: preValue.Phone,
      //      email: preValue.email,
      //    Phone: value,
      //   };
      // }

    })
    
  }
  const onSubmit=(event)=>{
   event.preventDefault();
    alert("Succesfully submtted  🥰  " );
  }
  return(
    <>
    <form onSubmit={onSubmit} >
    <div className="div">
    <h1 className=" head">LOGIN FORM</h1>
<h1>Hellow  {name.fname} {name.lname}
<p>{name.email}
<p>{name.Phone}</p></p>
<p>{name.Text}</p></h1>
<input type="text" placeholder="Enter Your Name" onChange={update} name="fname" value={name.fname} />
<input type="text" placeholder="Enter your LastName" onChange={update} name="lname" value={name.lname}/>
<input type="email" placeholder="Enter your Email" onChange={update} name="email" value={name.email}/>

<input type="number" placeholder="Enter your Phone Number" onChange={update} name="Phone" value={name.phone}/>
<input type="password" placeholder="Write Your Password" onChange={update} name="Text" value={name.Text}/>
<button type="submit"> Submit</button>
</div>
</form>
    </>
  );
}
export default App;