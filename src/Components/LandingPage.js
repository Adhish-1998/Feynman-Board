import React,{useState} from 'react'
import {Helmet} from 'react-helmet'
import {useNavigate} from 'react-router-dom'

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

    const getUser = async() =>{
        let result = await fetch(url,{
            method : 'GET',
            header : {
                'content-type' : 'application/json'
            }
        })
        result = await result.json()
        if(result.data) navigateToDashboard();
        else navigateToError();
        
    }

    return (
        <div>
            <Helmet>
                <title>Feynman Board</title>
            </Helmet>
            <h1>Landing Page</h1>
            <input id='homePage' placeholder='Enter User Name' value={user} onChange={(e)=>setUser(e.target.value)} ></input>
            <button onClick={getUser}>Go</button>
        </div>
    )
}

export default LandingPage