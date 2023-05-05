let nombre = "Tomás";
let apellido = "Gauna";
let estudiante = `${nombre} ${apellido}`;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let numeroCaracteres = estudiante.length;
let priCarNombre = nombre[0];
let ultCarApellido = apellido[apellido.length - 1];
let estudianteSinEspacio = estudiante.trim();
let nombreEstaEnEstudiante = estudiante.includes(nombre);

console.log(nombreEstaEnEstudiante);
