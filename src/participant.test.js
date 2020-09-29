import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Participant from './participant';


//Smoke Test
it ('renders without crashing', ()=> {
    const div = document.createElement('div');

    ReactDOM.render(<Participant name='Jane Doe' avatar='https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1' onStage = {true} inSession={true}/>, div);

    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Participant name='Jane Doe' avatar='https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1' onStage = {true} inSession={true}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });