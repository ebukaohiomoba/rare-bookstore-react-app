/*import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import LoginForm from './components/signin';

function UserLogIn() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  } 

  const [user, setUser] = useState({ name:'', email: ''});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("You're logged in")
      setUser({
          name:details.name,
          email:details.email,
          password:details.password
      });
    } else {
      console.log("Your login doesn't work")
    }
   
  }
  

  const Logout = () => {
    console.log("Log out");
  }

  return (
    <div className="App">
        {user.email != ""} 
          <div className ="welcome">
            <h2>Welcome <span> {user.name}</span></h2>
            <LoginForm Login={Login} error={error}/>
            <button>Logout</button>

          </div>
        
    </div>
  );
}

export default UserLogIn;
*/
