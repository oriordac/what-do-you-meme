const express = require('express');
const gameController = require('./controllers/game');
const userController = require('./controllers/users');
const path = require('path');

const app = express();
const port = 3000;
    
app
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static(__dirname + '/../client/dist'))
    .get('/', (req, res) => res.send('This class is awesome'))
    .use('/game', gameController)
    .use('/users', userController)

    .use((req, res) => {
        const homePath = path.join(__dirname , '/../client/dist/index.html');
        res.sendFile(homePath);
    })
    .use((err, req, res, next) => {
        console.log(err);
        const errorCode = err.code || 500;
        res.status(errorCode).send({message: err.message});
    })

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));