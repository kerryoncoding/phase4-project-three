

import { io } from 'socket.io-client'


// check if this is correct.... or is it 5555 ? 
const thisURL = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:5173';

export const socket = io(thisURL);