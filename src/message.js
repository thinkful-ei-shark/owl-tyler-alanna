/* eslint-disable default-case */
import React from 'react'

export default function Message(props){
    const timeStamp = new Date(props.timestamp).getTime();
    switch(props.type){
        case 'message':
            return <div className='message'>
            <div>
                <img src = {props.avatar} alt=''/>
                <h3>{props.name}</h3>
                <p className="timestamp">{timeStamp}</p>
            </div>
            <div>
                <p>{props.message}</p>
            </div>
         </div>;
      
        
        case 'thumbs-up':
            return <div className='event'>
            <h3>{props.name}</h3>
            <p>gave a thumbs up!</p>
            <p className="timestamp">{timeStamp}</p>
            </div>;

        case 'thumbs-down':
            return <div className='event'>
            <h3>{props.name}</h3>
            <p>gave a thumbs down!</p>
            <p className="timestamp">{timeStamp}</p>
            </div>;

        case 'raise-hand':
            return <div className='event'>
            <h3>{props.name}</h3>
            <p>raised their hand!</p>
            <p className="timestamp">{timeStamp}</p>
            </div>;
        case 'clap':
            return <div className='event'>
            <h3>{props.name}</h3>
            <p>clapped!</p>
            <p className="timestamp">{timeStamp}</p>
            </div>;

        case 'join':
            return <div className='event'>
            <h3>{props.name}</h3>
            <p>joined this session!</p>
            <p className="timestamp">{timeStamp}</p>
            </div>;

        case 'leave':
            return <div className='event'>
            <h3>{props.name}</h3>
            <p>left this session!</p>
            <p className="timestamp">{timeStamp}</p>
            </div>;

        case 'join-stage':
            return <div className='event'>
            <h3>{props.name}</h3>
            <p>joined the stage!</p>
            <p className="timestamp">{timeStamp}</p>
            </div>;

        case 'leave-stage':
            return <div className='event'>
            <h3>{props.name}</h3>
            <p>left the stage!</p>
            <p className="timestamp">{timeStamp}</p>
            </div>;

    }
   
}