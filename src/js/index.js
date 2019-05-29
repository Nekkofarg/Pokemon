import { pokearray } from './pokemon.js';
import _ from 'lodash';

const unsortPokearray = _.shuffle(pokearray);

function random(){
    return unsortPokearray.pop();
}

function select () {

    const pok1 = random();
    let pok2 = undefined;
    do {
        pok2 = random();
    } while (pok1.name == pok2.name);
    console.log(pok1.name, 'vs', pok2.name);
}

function combat () {
    do{
        pok1.hit();
        pok2.restlife();
    } while(pok1.life || pok2.life <= 0);
    
    return console.log (pok1, '  ', pok2);

}

select();
combat();

