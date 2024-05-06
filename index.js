//Parte inicial

//1.Variable con las balas
const cargador = ['pium!', 'pium!', 'pium!', 'pium!', 'pium!', 'pium!', 'pium!'];

//2.Función que imprima los disparos
const chauchat = (argumento) => {
    console.log(argumento);
};

//Parte Premium
//3. y 4. 80% de probabilidad de que se atasque y NO dispare; cada 3 disparos, imprimir un espacio
let pillada = Math.random();

const evitarCalentar = (argumento) => {
    for (let i = 0; i < argumento.length; i++) {
        console.log(argumento[i]);
        if ((i+1) % 3 === 0) {
            console.log('');
        }
    }
};

if (pillada <= 0.8) {
    console.log('Illo, me he quedao pillá!');   
} else {
    evitarCalentar(cargador);
};

