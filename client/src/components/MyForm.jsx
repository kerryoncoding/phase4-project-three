

import React, { useState } from 'react';
import { socket } from '../socket';

export function MyForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(5000).emit('create-something', value, () => {
      setIsLoading(false);
    });
  }

  return (
   <form onSubmit={ onSubmit }>
      <h3>Message:<input onChange={ e => setValue(e.target.value) } /><button type="submit" disabled={ isLoading } className="messageToggleButton">Send</button></h3>
   </form>
  );
}