import { Helmet } from 'react-helmet'
import Tooltip from "@mui/material/Tooltip";
import './AddTopic.css'

const AddTopic = () => {
    let options = ['Understood', 'Somewhat Understood', 'Not Clear', 'What Rubbish']
    options = options.join('\n')
    return (
        <div>
            <Helmet>
                <title>Feynman Board</title>
            </Helmet>
            <h1>Add Topic</h1>
            <div className='AddTopic'>
                <label>Topic : <input id='topicName'></input></label>
                <Tooltip title={
                    <>
                    <div id='a'>{'Understood'}</div>
                    <div id='b'>{'Somewhat Understood'}</div>
                    <div id='c'>{'Not Clear'}</div>
                    <div id='d'>{'What Rubbish'}</div>
                    </>
                }>
                    <textarea></textarea>
                </Tooltip>

            </div>

        </div>
    )
}

export default AddTopic