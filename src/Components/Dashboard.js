import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import './Dashboard.css'

const Dashboard = () => {
    const url = 'http://localhost:5000/getTopic'
    const navigate = useNavigate()
    const [topics, setTopics] = useState([])

    const getTopic = async () => {
        let result = await fetch(url, {
            method: 'GET'
        })
        result = await result.json();
        setTopics(result.data)

    }


    useEffect(() => {
        getTopic();
        console.log(topics)
    }, [])

    const navigateToAddTopic = () => {
        navigate('/addtopic')
    }

    return (
        <div className='Dashboard'>
            <Helmet>
                <title>Feynman Board</title>
            </Helmet>
            <h1>Dashboard</h1>
            <div className='TopicList'>
                <button onClick={navigateToAddTopic}>Add Topic</button>
            </div>
            <div className='Topics'>
                <h3>Topic List</h3>
                {
                    topics.map((item, index) =>
                        <ul key={index}>
                            <li>{item.topic + ' : '}</li>
                            <li>{item.marks}</li>
                        </ul>
                    )
                }
            </div>
        </div>
    )
}

export default Dashboard