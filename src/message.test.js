import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Message from './message';


it ('renders without crashing', ()=> {
    const div = document.createElement('div');

    ReactDOM.render(<Message type= 'clap' name = 'test' timestamp = {1548852544247}/>, div);

    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Message type= 'clap' name = 'test' timestamp = {1548852544247}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });