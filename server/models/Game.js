const users = require("./Users");
const captionsDeck = require('../models/quoteCards');

const DEAL_AMOUNT = 3;

const Players = [
    {Name:'Bernie', Score: 0, isDealer: false}
];

const MyCards = [];

const PictureDeck = [
    'https://imgflip.com/s/meme/Ancient-Aliens.jpg'
];

let CurrentPicture = "";

const CardsInPlay = [

];

function SubmitCaption(caption, playerId) {
    const player = Players[playerid];
    if(player.isDealer) {
        throw Error('Dealer is not allowed to submit a caption');
    }
    CardsInPlay.push({
        Text: caption,
        PlayerId: playerId,
        IsChosen: false
    })
}

function Join(userid) {
    const user = users.Get(userid);
    Players.push( {Name: user.Name, Score: 0, isDealer: false} )

    const myCards = CaptionsDeck.list.slice(iCurrentCaption, iCurrentCaption+DEAL_AMOUNT);
    iCurrentCaption += DEAL_AMOUNT;

    return { Playerid: myCards };
}

module.exports = {
    Players, PictureDeck, CurrentPicture, 
    CardsInPlay: CardsInPlay, 
    SubmitCaption, Join
}