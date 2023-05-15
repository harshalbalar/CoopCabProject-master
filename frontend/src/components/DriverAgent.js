import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const DriverAgent = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/')

    }
  }, [])


  const collectData = async () => {
    //return console.log(JSON.stringify({username,password,role,status}));

    console.warn(email, password, role, status);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ email, password, role, status }),
      headers: {
        'content-type': 'application/json'
      }
    });

    result = await result.json();
    console.warn(result);
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result))
    // navigate('/Login')


  }


  return (
    <div className='register'>
      <h1> SignUp </h1>Email:
      <input className='InputBox' type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter The Email' />Password:
      <input className='InputBox' type="Password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter The Password' />   Role:
      <input className='InputBox' type="text" onChange={(e) => setRole(e.target.value)} value={role} placeholder='Enter The Role' />Status:
      <input className='InputBox' type="text" onChange={(e) => setStatus(e.target.value)} value={status} placeholder='Enter The Status' />

      <button className='button' type="button" onClick={collectData} >Sign UP</button>

    </div>
  )

}

export default DriverAgent;