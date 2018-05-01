import React from 'react';
import '../../css/kiosk.css';
import CenterPane from "./center-pane";
import Footer from "./footer";
import Button from "./button";
import LangSwitcher from "./lang-switcher";
import Header from "./header";
import {withRouter} from 'react-router-dom';
import 'babel-polyfill';
import "isomorphic-fetch";

class Back extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            header: [],
            footer: [],
            buttons: [],
            isSpecial: true
        }
    }


    componentWillReceiveProps(nextProps) {
        this.getData(nextProps);
    }

    componentDidMount() {
        this.getData(this.props);
    }

    getData(props) {
        var isSpecial = props.match.params.pageId == 1 || props.match.params.pageId == 11 || props.match.params.pageId == 12;

        var headerButtons = [];
        var footerButtons = [];
        if (isSpecial) {
            fetch(ctx+"api/header" + props.location.pathname)
                .then(res => res.json())
                .then(result => {
                    headerButtons = result;
                });
            fetch(ctx+"api/footer" + props.location.pathname)
                .then(res => res.json())
                .then(result => {
                    footerButtons = result;
                });
        }
        fetch(ctx+"api" + props.location.pathname)
            .then(res => res.json())
            .then(result => {
                this.setState({
                    buttons: result,
                    isSpecial: isSpecial,
                    header: headerButtons,
                    footer: footerButtons
                });
            })
    }

    render() {
        var style = 'main menu_body';
        if (!this.state.isSpecial) {
            style += ' main-2lvl';
        }
        return (
            <div className={style}>
                <Header headerTitle=''>
                    <LangSwitcher optionName='Eng'/>
                    {this.state.header.map(headerButton => {
                            return <Button id={headerButton.id.position}
                                           optionName={headerButton.positionName}
                                           opcatsLanguage={headerButton.opcatsLanguage}
                                           link={headerButton.pageLink}/>
                        }
                    )}
                </Header>
                <CenterPane>
                    {this.state.buttons
                        .sort((a,b)=>a.id.position>b.id.position)
                        .map(button => {
                            return <Button key={button.id.position} id={button.id.position}
                                           optionName={button.positionName}
                                           opcatsLanguage={button.opcatsLanguage}
                                           link={button.pageLink}/>
                        }
                    )}
                </CenterPane>
                <Footer footer={this.state.footer} isSpecial={this.state.isSpecial}/>
            </div>
        )
    }
}

export default withRouter(Back)