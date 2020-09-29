import React from 'react';
import './participant.css';

//takes name, avatar, and inSession
export default function Participant(props){

    let message = <p className='left-session'/>
    
    if(props.inSession && props.onStage){
        message = <p className= 'in-session'>On stage</p>
    }else if(props.inSession){
         message = <p className='in-session'/>
    }

    
    return (
        <div className = 'participant'>
            <img src={props.avatar} alt=''/>
            <h3>{props.name}</h3>
            {message};

        </div>
    );
}