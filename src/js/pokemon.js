let pokemon = class {
    constructor (N = 'random', t = 'normal', l = 1){
        this.name = N;
        this.type = t;
        this.lvl = l;
    }
}

let Bulbasur = new pokemon ('Bulbasur', 'planta', 10);
let Pikachu = new pokemon ('Pikachu', 'electrico', 9);
let Charizar = new pokemon ('Charizar', 'fuego', 15);
let Squirtel = new pokemon ('Squirtel', 'agua', 8);

export const pokearray = [Bulbasur, Pikachu, Charizar, Squirtel];