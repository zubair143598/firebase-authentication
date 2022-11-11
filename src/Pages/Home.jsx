import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import Button from '../Components/Elements/Button'
// import Form from '../Components/Elements/Form'
// import Hero from '../Components/Elements/Hero'


const Home = () => {
  const navigate=useNavigate()
  useEffect(()=>{
    let authToken=sessionStorage.getItem("auth");
    if(authToken)
    {
      navigate("/home");
    }
    if(!authToken)
    {
      navigate("/login");
    }
  },[navigate]);

  const logout=()=>
  {
    sessionStorage.removeItem("auth")
    navigate("/login")
  }

  return (
    <>
    <h2>Home</h2>
    <button onClick={logout}>Logout</button>

    </>
  )
}

export default Home