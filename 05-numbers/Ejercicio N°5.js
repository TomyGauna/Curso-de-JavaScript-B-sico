const alturaCM = 175;
const alturaM = parseFloat(alturaCM / 100);
const pesoKG = 61.7;

const alturaRed = alturaM.toPrecision(1);
const pesoRed = Math.floor(pesoKG);

const iguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(pesoRed);
