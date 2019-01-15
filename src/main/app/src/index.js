import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux' ;
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {SampleList} from './sample-list'
import {Sample} from './sample'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
        <BrowserRouter>
            <Switch>
                <Route path="/samples/:sampleId/:pageId/:langId" component={Sample} />
                <Route path="/samples" component={SampleList} />
                <Route path="*" component={SampleList} />
            </Switch>
        </BrowserRouter>
        </MuiThemeProvider>
    </Provider>, document.getElementById('root'));