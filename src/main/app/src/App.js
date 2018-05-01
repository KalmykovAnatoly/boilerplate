import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
    addTrack(){
          this.props.onAddTrack(this.trackInput.value)
        this.trackInput.value = ''
    }
    goTo(){
        this.props.history.push('/samples');
    }
    render() {
        console.log(this.props.testStore);
        return (
            <div className="App">
                <input type="text" ref={(input)=>this.trackInput = input}/>
                <button onClick={this.addTrack.bind(this)}>Add track</button>
                <ul>
                    {
                        this.props.testStore.map((track, index) =>
                            <li key={index}>{track}</li>)
                    }
                </ul>
                <button onClick={()=>this.goTo()}>На другую страницу</button>
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddTrack: (trackName) =>{
             dispatch({type: 'ADD_TRACK', payload: trackName})
        }
    })
)(App);
