import React from 'react';
import CenterPane from "./center-pane";
import Footer from "./footer";
import Button from "./button";
import LangSwitcher from "./lang-switcher";
import Header from "./header";
import ButtonDialog from './button-dialog';
import {connect} from 'react-redux';

export class Sample extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            header: [],
            footer: [],
            buttons: [],
            isSpecial: true,
        };
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
        // if (isSpecial) {
        //     fetch(ctx+"api/header" + props.location.pathname)
        //         .then(res => res.json())
        //         .then(result => {
        //             headerButtons = result;
        //         });
        //     fetch(ctx+"api/footer" + props.location.pathname)
        //         .then(res => res.json())
        //         .then(result => {
        //             footerButtons = result;
        //         });
        // }
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
    openModal(e, text){
        e.preventDefault();
        this.setState({
            modalIsOpen: true
        })
    }

    render(){
        console.log(this.state)
        var style = 'main menu_body';
        if (!this.state.isSpecial) {
            style += ' main-2lvl';
        }
        return <div className={style}>
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
                            return <Button key={button.position}
                                           id={button.position}
                                           name={button.name}
                                           onRightClick={(e, text)=>this.openModal(e, text)}
                                           link={button.link}/>
                        }
                    )}
            </CenterPane>
            <Footer footer={this.state.footer} isSpecial={this.state.isSpecial}/>
            <ButtonDialog/>
        </div>
    }
}