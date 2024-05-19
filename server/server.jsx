
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// console.log("Before server creation");

const server = app.listen(4000, () => {
   console.log('Server is listening on port 4000');
});
 

const io = require("socket.io")(server, {
   cors: {
      origin: ['http://127.0.0.1:5173/'],
   }
})




io.on("connection", socket => {
   console.log(socket.id)
})

console.log("After server creation");