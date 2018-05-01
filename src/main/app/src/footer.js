import React from 'react'
import './css/kiosk.css'
import {withRouter} from 'react-router-dom';
import Button from './button'
import BackButton from './back-button'

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            footer: []
        }
    }

    render() {
        if (this.props.isSpecial) {
            return (
                <div className='main-footer' id='footer'>
                    {this.props.footer.map(footerButton => {
                        return <Button id={footerButton.id.position}
                                       optionName={footerButton.positionName}
                                       opcatsLanguage={footerButton.opcatsLanguage}
                                       link={footerButton.pageLink}/>
                    })}
                </div>
            )
        }else{
            return (
                <div className='main-footer' id='footer'>
                    <BackButton optionName="Назад"/>
                </div>
            )
        }
    }
}

export default withRouter(Footer)