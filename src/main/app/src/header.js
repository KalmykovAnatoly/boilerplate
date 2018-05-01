import React from 'react'
import './css/kiosk.css'

class Header extends React.Component {
    render() {
        return (
            <div className='main-header' id='header'>
                <h1 className='main-header__title main-header__title-show'>{this.props.headerTitle}</h1>
                    {this.props.children}
            </div>
        )
    }
}

export default Header