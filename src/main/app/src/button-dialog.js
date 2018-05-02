import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import store from './store'

export default class ButtonDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            name: "",
            position: ""
        }
        store.subscribe(()=>{
            this.setState({
                open: store.getState()[0].open,
                name: store.getState()[0].name,
                position: store.getState()[0].position
            })
        })
    }


    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    {this.state.name} - {this.state.position}
                </Dialog>
            </div>
        );
    }
}