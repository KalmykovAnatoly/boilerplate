import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux' ;
import {createStore} from 'redux' ;
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {SampleList} from './sample-list'
import {Sample} from './sample'

const initialState =  [
    'Smels like teen Spirit',
    'Enter Sandman'
] ;

function playlist(state = initialState, action) {
    if (action.type === 'ADD_TRACK') {
        return [...state, action.payload]
    }
    return state;
}

const store = createStore(playlist);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/samples/:sampleId/:pageId/:langId" component={Sample} />
                <Route path="/samples" component={SampleList} />
                <Route path="*" component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

//
// store.subscribe(()=>{
//    console.log('subscribe', store.getState());
//     const list = document.querySelectorAll('.list')[0];
//     list.innerHTML = '';
//     document.querySelectorAll('.trackInput')[0].value = '';
//     store.getState().forEach(track => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     })
// });
//
// const addTrackBtn = document.querySelectorAll('.addTrack')[0];
// addTrackBtn.addEventListener('click', ()=>{
//     const trackName = document.querySelectorAll('.trackInput')[0].value;
//     store.dispatch({
//         type: 'ADD_TRACK',
//         payload: trackName
//     });
//     console.log('trackName', trackName)
// });