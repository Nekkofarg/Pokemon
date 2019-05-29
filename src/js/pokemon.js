const Pokemon = class {
    constructor (N = 'random', t = 'normal', l = 20, a = 1){
        this.name = N;
        this.type = t;
        this.life = l;
        this.atack = a; 
    }
    hit(){
       return Pokemon.ceil(Pokemon.random()*this.atack);
    }
    restliffe(){
        return Pokemon.life - Pokemon.hit();
    }

}

const Bulbasur = new Pokemon ('Bulbasur', 'planta', 20, 2);
const Pikachu = new Pokemon ('Pikachu', 'electrico', 20, 3);
const Charizar = new Pokemon ('Charizar', 'fuego', 20, 3);
const Squirtel = new Pokemon ('Squirtel', 'agua', 20, 2);

export const pokearray = [Bulbasur, Pikachu, Charizar, Squirtel];