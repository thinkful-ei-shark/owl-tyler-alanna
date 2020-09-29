import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Store from './store';
import Stage from './Stage';

//Snapshot Test
it ('renders the ui as expected', () => {
  const tree = renderer
    .create(<Stage store = {Store} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

//Smoke Test
it ('render without crashing', () => {
  //create a DOM element to render the component
  const div = document.createElement('div');

  //render the component
  ReactDOM.render(<Stage store = {Store} />, div);

  //clean up code
  ReactDOM.unmountComponentAtNode(div);
})