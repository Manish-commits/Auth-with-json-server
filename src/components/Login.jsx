import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if(validate()){
    
    fetch('http://localhost:8000/user/')
    .then((response) => response.json())
    .then((res) => {
      res.map((user) => {
        console.log(user.userName);
        if(user.userName === username && user.password === password){
          navigate('/')
          return console.log("success");
        } else {
          return console.log("failed");
        }
    })
    })
    .catch((err) => {
      toast.error("login failed", err);
    })
    }
    
  }

  const validate = () => {
    let result = true;
    if(username === '' || username === null){
      toast.warning('Enter correct username');
      result = false;
    } 
    if(password === '' || password === null){
      toast.warning('Enter correct password');
      result = false;
    } 
    return result;
  }

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-3">
        <form onSubmit={handleSubmit} className="container">
          <div className="card">
            <div className="card-header">
              <h2>Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Username: </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password: </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary">Login</button>
              <Link to="/register" className="btn btn-warning">Register</Link>
            </div>
          </div>
        </form>
      </div>
    </div> 
  );
};

export default Login;
