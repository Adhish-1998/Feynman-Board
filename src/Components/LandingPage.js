import React,{useState} from 'react'
import {Helmet} from 'react-helmet'
import {useNavigate} from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () =>{
    const url = 'http://localhost:5000/getUser'

    const [user, setUser] = useState('')
    const navigate = useNavigate();

    const navigateToDashboard = () =>{
        navigate('/dashboard');
    }

    const navigateToError = () =>{
        navigate('/error');
    }

    const getUser = async () =>{
        let result = await fetch(url,{
            method : 'POST',
            body: JSON.stringify({user}),
            headers : { 'Content-Type' : 'application/json' }
        }) 
        result = await result.json()
        if(result.data) navigateToDashboard();
        else navigateToError();
        
    }

    return (
        <div className='LandingPage'>
            <Helmet>
                <title>Feynman Board</title>
            </Helmet>
            <h1>Landing Page</h1>
            <h4>Demo Use : Enter 'test123' and Click on Button Go</h4>
            <input id='homePage' placeholder='Enter User Name' value={user} onChange={(e)=>setUser(e.target.value)} ></input>
            <br></br>
            <button onClick={getUser}>Go</button>
        </div>
    )
}

export default LandingPage