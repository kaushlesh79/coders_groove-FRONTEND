import { io } from 'socket.io-client';

export const initSocket = async () => {
  const options = {
    forceNew: true,
    reconnectionAttempts: Infinity,
    timeout: 10000,
    transports: ['websocket'],
  };

  const socket = io(process.env.REACT_APP_BACKEND_URL, options);

  socket.on('connect', () => {
    console.log('Connected to backend via socket:', socket.id);
  });

  socket.on('connect_error', (err) => {
    console.error('Connection failed:', err.message);
  });

  return socket;
};

console.log('Backend URL:', process.env.REACT_APP_BACKEND_URL);
