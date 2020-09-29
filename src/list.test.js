import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './list';
import store from './store';

it ('renders without crashing', ()=> {
    const div = document.createElement('div');

    ReactDOM.render(<List participants = {store.participants}/>, div);

    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List participants = {store.participants}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });