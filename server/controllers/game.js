const express = require('express');

const quoteCards = require('../models/quoteCards');
const game = require('../models/Game');

const router = express.Router();

game.SubmitCaption("Corana Sucks", 0);

router
    .use('/quoteCards', (req, res, next) => {
        console.log({method: req.method, body: req.body});
        next();
    })
    .get('/quoteCards', (req, res) => res.send(quoteCards))
    .post('/quoteCards', (req, res) => {
        quoteCards.add(req.query.text);
        res.send(quoteCards.list[quoteCards.list.length - 1]);
    })
    .get('/', (req, res) => res.send({
        Players: game.Players,
        PictureDeck: game.PictureDeck, 
        CurrentPicture: game.CurrentPicture, 
        CardsInPlay: game.CardsInPlay.map(x => ({...x, PlayerId: undefined}))
    }) )
    .post('/cardsInPlay', (req, res) => {
        const playerId = req.body.playerId;
        game.SubmitCaption(req.body.caption, playerId);
    })
    

module.exports = router;