const express = require('express');

const quoteCards = require('../models/quoteCards');
const game = require('../models/Game');

const router = express.Router();

router
    .get('/', (req, res) => res.send({
        Players: game.Players,
        PictureDeck: game.PictureDeck, 
        CurrentPicture: game.CurrentPicture, 
        CardsInPlay: game.CardsInPlay.map(x => ( {...x, PlayerId: 'unknown'} ))
    }) )
    .post('/join', (req, res) => res.send(game.Join(req.body.userid)) )
    .post('/flipPicture', (req, res)=> res.send(game.FlipPicture()) )
    .get('/quoteCards', (req, res) => res.send(quoteCards))
    .post('/quoteCards', (req, res) => {
        quoteCards.add(req.query.text);
        res.send(quoteCards.list[quoteCards.list.length - 1]);
    })
    .post('/cardsInPlay', (req, res) => {
        const playerId = req.body.playerId;
        game.SubmitCaption(req.body.caption, playerId);
        res.send( {sucess: true} );
    })
    

module.exports = router;