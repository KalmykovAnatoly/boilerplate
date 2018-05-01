import React from 'react'
import './css/kiosk.css'

class CenterPane extends React.Component {
    render() {
        return (
            <div className='main-content'>
            <div id='wrapper' className='wrapper'>
                <div className='wrapper_inner'>
                    {this.props.children}
                </div>
            </div>
            </div>
        )
    }
}

export default CenterPane