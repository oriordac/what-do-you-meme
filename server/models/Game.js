const CurrentUser = require("./Users");

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
    CardsInPlay.push({
        Text: caption,
        PlayerId: playerId,
        IsChosen: false
    })
}

function Init() {
    Players.push( {Name: CurrentUser.Name, Score: 0, isDealer: true} )
    MyCards.push(CaptionsDeck[0])
    MyCards.push(CaptionsDeck[1])

    CurrentPicture = PictureDeck[0]
}

module.exports = {
    Players, PictureDeck, CurrentPicture, 
    CardsInPlay: CardsInPlay, 
    SubmitCaption, Init
}