import React from 'react';
import './css/kiosk.css'
import {withRouter} from  'react-router-dom';

export class Button extends React.Component {

    goToPage(link){
        if (link != null){
            var sampleId = this.props.match.params.sampleId;
            var langId = this.props.match.params.langId;
            console.log(this.props.match)
            this.props.history.push('/samples/' + sampleId+"/"+link+"/"+langId);
        }
    }

    render() {
        var name;
        if (this.props.opcatsLanguage!=null){
           name = this.props.opcatsLanguage.name;
        }
        return (
            <div id={'div_' + this.props.id} className='option' onClick={()=>{this.goToPage(this.props.link)}}>
                <div className='wrap'>
                    <div className='option_title'>{this.props.optionName}{name}</div>
                </div>
            </div>
        );
    }
}
export default withRouter(Button)