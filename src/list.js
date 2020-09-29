import React from 'react';
import Participant from './participant';

export default function List(props){
    //sort participants into the ones in session, vs. ones that are out of session
    const onStage = props.participants.filter((participant) => participant.onStage === true);

    const inSession = props.participants.filter((participant) => participant.inSession && !participant.onStage);

    const leftSession = props.participant.filter((participant) => !participant.inSession);
    //map through the participants array and render each individual

    return <div className='list'>
        {onStage.map((participant) => {
            return <Participant key= {participant.id} name={participant.name} avatar={participant.avatar} inSession={participant.inSession} onStage={participant.onStage}/>;
        })}
        {inSession.map((participant) => {
            return <Participant key= {participant.id} name={participant.name} avatar={participant.avatar} inSession={participant.inSession} onStage={participant.onStage}/>;
        })}
        {leftSession.map((participant)=> {
            return <Participant key= {participant.id} name={participant.name} avatar={participant.avatar} inSession={participant.inSession} onStage={participant.onStage}/>;
        })}
    </div>
}