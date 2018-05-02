import React from 'react';
import './css/kiosk.css'
import {withRouter} from  'react-router-dom';
import {connect} from 'react-redux';

export class Button extends React.Component {

    goToPage(link){
        if (link != null){
            var sampleId = this.props.match.params.sampleId;
            var langId = this.props.match.params.langId;
            console.log(this.props.match)
            this.props.history.push('/samples/' + sampleId+"/"+link+"/"+langId);
        }
    }
    pickButton(e, name, position){
        e.preventDefault();
        this.props.pickButton({
            open:true,
            name: name,
            position: position 
        });
    }

    render() {
        var name;
        if (this.props.opcatsLanguage!=null){
           name = this.props.opcatsLanguage.name;
        }
        else{
            name = this.props.name;
        }
        return (
            <div id={'div_' + this.props.id}
                 className='option'
                 // onContextMenu={(e)=>this.props.onRightClick(e, this.props.id)}
                 onContextMenu={(e)=>this.pickButton(e, name, this.props.id)}
                 onClick={()=>{this.goToPage(this.props.link)}}>
                <div className='wrap'>
                    <div className='option_title'>{name}</div>
                </div>
            </div>
        );
    }
}
export default withRouter (connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        pickButton: (buttonState) =>{
            dispatch({type: 'PICK_BUTTON', payload: buttonState})
        }
    })
)(Button));