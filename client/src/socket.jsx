

import { io } from 'socket.io-client'


// check if this is correct.... or is it 5555 ? 
const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4000';

export const socket = io(URL);