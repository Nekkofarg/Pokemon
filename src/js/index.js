import { pokearray } from './pokemon.js';
import _ from 'lodash';

function rand(){
    const pok = _.shuffle(pokearray);
    return pok.pop();
}

let pok1 = rand();
let pok2 = rand();
    if(pok1 == pok2){
        pok1 = rand();



