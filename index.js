const cargador = ['pium!', 'pium!', 'pium!', 'pium!', 'pium!', 'pium!', 'pium!'];

const chauchat = (argumento) => {
    console.log(argumento);
};

let pillada = Math.random();

const evitarCalentar = (argumento) => {
    for (let i = 0; i < argumento.length; i++) {
        console.log(argumento[i]);
        if (i === 2 || i === 5 || i === 8) {
            console.log('');
        }
    }
};

if (pillada < 0.8) {
    console.log('Illo, me he quedao pillá!');   
} else {
    evitarCalentar(cargador);
};

