import { CurrentUser } from "./Users";
import myFetch from './myFetch';

export let State = {};
export let MyCards = [];

export async function Init(){
    //MyCards = await myFetch('http://localhost:3000/game/join');
    State = await myFetch('http://localhost:3000/game');
} 