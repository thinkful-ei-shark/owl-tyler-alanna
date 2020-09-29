import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import store from './store';

it ('renders without crashing', ()=> {
    const div = document.createElement('div');

    ReactDOM.render(<List participants = {store.participants}/>, div);

    ReactDOM.unmountComponentAtNode(div);
});