const express = require('express');
const bp = require('body-parser');
const morgan = require('morgan');
const server = express();
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/test_users')

server.use(morgan('tiny'));
server.use(bp.json());

// Write your Routes Here! 
<<<<<<< HEAD

=======
// DUMMY SERVER FOR TESTING
>>>>>>> 13de371e588aa32c0f0eb35af526ffeee4fa6c20
server.post('/api/register', (req, res) => {
    res.status(200).json({ id: 1 });
});

server.post('/api/login', (req, res) => {
    res.status(200).json({ aboutme: 'Test' });
});

<<<<<<< HEAD
=======
server.put('/api/update/:id', (req, res) => {
    const id = Number(req.params.id);
    const { aboutme } = req.body;
    res.status(200).json({
        id,
        email: 'email@email.com',
        password: 'asdf',
        aboutme,
    });
});

server.delete('/api/delete/:id', (req, res) => {
    const id = Number(req.params.id);
    res.status(200).json({
        msg: 'user has been deleted!'
    });
});

server.get('/api/users', (req, res) => {
    res.status(200).json([{}, {}, {}]);
});
// DUMMY SERVER FOR TESTING
>>>>>>> 13de371e588aa32c0f0eb35af526ffeee4fa6c20
module.exports = server;