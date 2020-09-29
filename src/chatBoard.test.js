import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatBoard from './chatBoard';

it ('renders without crashing', ()=> {
    const div = document.createElement('div');

    ReactDOM.render(<ChatBoard />, div);

    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ChatBoard/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });