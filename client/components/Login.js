import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth.js';

const Login = (props) => {
  const [user, setUser] = useState({username: '', password: ''})

  const handleChange = event => {
    setUser(
      {
        ...user,
        [event.target.name]: event.target.value
      }
    );
  };

  const login = event => {
    event.preventDefault();

    axiosWithAuth()
    .post ("/login", user)
    .then(result => {
      localStorage.setItem("token", result.data.payload)
      props.history.push("/colors");
    })
    .catch(error => console.log(error))
  };

  return (
    
    <div className="login-form">
      
      <h1>Welcome to the Bubble App!</h1>

        <form onSubmit = {login}>
          <input type="text" name="username" placeholder="Name" value={user.username} onChange={handleChange} />

          <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange}/>

          <button type="submit">Log In</button>
        
        </form>
    </div>
  );
}

export default Login