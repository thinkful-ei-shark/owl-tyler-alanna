import React from 'react';
import Store from './store';
import Message from './message'

export default function ChatBoard() {
  function participant(id) {
    return Store.participants.find(participant => participant.id === id);
  }
  const message = Store.chatEvents.map((event, key) => {
    return <Message key ={key} timestamp={event.timestamp} type={event.type} message={event.message} name={participant(event.participantId).name} />
  })
  return (
  <div className='chatBoard'>
      {message}
  </div>
  )
}