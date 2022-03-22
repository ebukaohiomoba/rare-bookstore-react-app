import React, { useState } from 'react';

function LoginForm(){
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
      } 
    
      const [user, setUser] = useState({ name:'', email: ''});
      const [error, setError] = useState("");
    
    const [details, setDetails] = useState({name:"", email:"",password:""});

    const submitHandler = e => {
        e.preventDefault();
        /*if (this.state.username === "" || this.state.password === "") {
            alert("Fields are required");
            return;
          } */
          if (details.email == adminUser.email && details.password == adminUser.password) {
            return "You're logged in";
          }else{
            alert("Login Failed ! . Check Username and Password.")
          }
           
          console.log(`${this.state.username}`)
      
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-container">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                </div>
                <button>Log In</button>
            </div>
        </form>
    )
}

export default LoginForm;