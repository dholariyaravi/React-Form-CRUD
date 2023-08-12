import React, { useEffect, useState } from 'react';
import "./Foemtype.css";
import Home from "./Home";
import { Link, useNavigate } from 'react-router-dom';
import { date } from 'yup';
import { toast } from "react-toastify";

function Login (propa) {

    const Navigate = useNavigate()
  
    const [Lgdata, setLgdata] = useState({
         email :"",
         password : "" , 
    });

    const hendal = (e) => {
        setLgdata({ ...Lgdata, [e.target.name]: e.target.value });
      };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Lgdata);

    const users = JSON.parse(localStorage.getItem('USERData')) || [];

    const storedUser = users.find(user => user.email === Lgdata.email);

    if (storedUser) {
      if (storedUser.password === Lgdata.password) {
        setLgdata(storedUser);
        toast("login Successfully");
        Navigate('/');
       
      } else {
        toast("falid");
        alert('Invalid credentials');
      }
    } else {
      toast("falid");
      alert('User not found');
    }
  }

  // Navigate('/home');
  return (
    <div>

      <form onSubmit={handleSubmit} className="Form_11">
      <h2>Login</h2>
        <div className='col-sm-6'>
        <input
          type="text"
          name='email'
          placeholder="email"
          className="Form_12pro"
          onChange={hendal}
        />
         </div>
         <br/>
     
        <div className='col-sm-6'>
        <input
          type="password"
          name='password'
          placeholder="password"
          className="Form_12pro"
          onChange={hendal}
        />
          </div>
          <br/>
          <br/> 
        <input type="submit" className='px-5 btn btn-dark' value='Login' />
      
      </form>

        <div className='text-start px-4'>
                <Link to={"/"} >Already have an account?</Link>
        </div>
 
    </div>
  )}
 
 export default Login
