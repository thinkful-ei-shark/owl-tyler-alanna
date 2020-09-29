import React from 'react';
import Store from './store';

export default function chatBoard() {
  function participant(id) {
    return Store.participants.find(participant => participant.id === id);
  }
  const message = Store.chatEvents.map(event => {
    return <Message timestamp={event.timestamp} type={event.type} message={event.message} name={participant(event.participantId).name} />
  })
  return (
  <div className='chatBoard'>
  
  </div>
  )
}