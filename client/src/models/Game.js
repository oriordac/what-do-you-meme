import myFetch from "./myFetch";

let interval;

export default {
    State : {},
    MyCards: [],

    Int() {
        if(this.MyCards.length) {
            //the player already joined the game
            return
        }
        myFetch('/game/join', {})
            .then(x => {
                this.MyCards = x.myCards;
                console.log(x);
            })
            .catch(err => console.warn(err));
    },
    Run() {
        myFetch('/game')
            .then(x=> { 
                this.State = x;
                console.log(x);
            });
    },
    Start(){
        interval = setInterval(this.Run, 2000 )
    },
    Pause(){
        clearInterval(interval);
    }
}