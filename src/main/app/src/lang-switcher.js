import React from 'react';
import './css/lang_switcher.css'
import {withRouter} from  'react-router-dom';

export class LangSwitcher extends React.Component {

    switchLang(){
        var sampleId = this.props.match.params.sampleId;
        var langId = this.props.match.params.langId;
        var pageId = this.props.match.params.pageId;
        if (langId == 0){
            langId = 1;
        }
        else {
            langId = 0;
        }
        this.props.history.push('/samples/' + sampleId+"/"+pageId+"/"+langId);
    }

    render() {
        return (
            <div id='lang_switcher' className='switcher' onClick={()=>{this.switchLang()}}>
                <table frameBorder='0' cellPadding='0' cellSpacing='0'>
                    <tbody>
                    <tr>
                        <td data-id='1' data-title='Eng'>
                            <div id='div_38' className='option lang'>
                                <div className='wrap'>
                                    <div className='option_title'>{this.props.optionName}</div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default withRouter(LangSwitcher)