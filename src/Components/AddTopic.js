import { Helmet } from 'react-helmet'
import Tooltip from "@mui/material/Tooltip";
const AddTopic = () => {
    return (
        <div>
            <Helmet>
                <title>Feynman Board</title>
            </Helmet>
            <h1>Add Topic</h1>
            <div className='AddTopic'>
                <Tooltip title='Hello World'>
                <label>Topic : <input id='topicName'></input></label>
                </Tooltip>
                
                <textarea></textarea>
            </div>

        </div>
    )
}

export default AddTopic