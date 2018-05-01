import React from 'react'
import './css/kiosk.css'
import {withRouter} from 'react-router-dom';

class BackButton extends React.Component {

    goBack(){
        this.props.history.goBack();
    }

    render() {
        return (
            <div id="32" className='option btn-back' onClick={()=>{this.goBack()}}>
                <div className='wrap'>
                    <div className='option_title'>{this.props.optionName}</div>
                </div>
            </div>
        )
    }
}

export default withRouter(BackButton)