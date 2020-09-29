import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './participant';


//Smoke Test
it ('renders without crashing', ()=> {
    const div = document.createElement('div');

    ReactDOM.render(<Participant name='Jane Doe' avatar='https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1' onStage = {true} inSession={true}/>, div);

    ReactDOM.unmountComponentAtNode(div);
});