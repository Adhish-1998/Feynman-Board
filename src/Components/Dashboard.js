import {Helmet} from 'react-helmet'
import { useNavigate } from 'react-router-dom'

const Dashboard = () =>{
    const navigate = useNavigate()

    const navigateToAddTopic = () =>{
        navigate('/addtopic')
    }

    return (
        <div>
            <Helmet>
                <title>Feynman Board</title>
            </Helmet>
            <h1>Dashboard</h1>
            <button onClick={navigateToAddTopic}>Add Topic</button>
        </div>
    )
}

export default Dashboard