
import { io } from 'socket.io-client';


// const socket = io('http://127.0.0.1:5173');

// socket.on('connect', () => {
//   console.log('Connected to server');
// });

// export default socket;



const URL = process.env.NODE_ENV === 'production' ? False : 'http://127.0.0.1:4000';


export const socket = io(URL);

console.log('Server is listening:', socket.connected);







