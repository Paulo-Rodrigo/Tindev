const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

  mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0.azcdg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
     //mongodb+srv:PauloRodrigo:twx21p27@cluster0-d0ygf.mongodb.net/test?retryWrites=true&w=majority
    // myFirstDatabase

     useNewUrlParser: true, useUnifiedTopology: true
});

server.use(cors());
server.use(express.json());
server.use(routes);
 
server.listen(3333);
