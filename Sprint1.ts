// Tipos de datos
let nombre: string = "Juan";
let edad: number = 30;
let estaCasado: boolean = true;
let direccion: string | null = null; // Unión de tipos

// Enumeración
enum Color {
    Rojo = "ROJO",
    Verde = "VERDE",
    Azul = "AZUL",
}

let colorFavorito: Color = Color.Verde;

// Tipos any y unknown
let dato: any = 10;
let datoDesconocido: unknown = "Hola";

dato = "Texto"; // any permite cambiar el tipo dinámicamente
// datoDesconocido = 20; // Error: No se puede asignar un tipo number a unknown directamente

if (typeof datoDesconocido === "string") {
    let longitud: number = datoDesconocido.length; // Se necesita una comprobación de tipo
}

// Tipos de unión e intersección
type Persona = {
    nombre: string;
    edad: number;
};

type Trabajador = {
    profesion: string;
};

type Empleado = Persona & Trabajador; // Intersección de tipos

let empleado: Empleado = {
    nombre: "María",
    edad: 25,
    profesion: "Programadora",
};

// Tipos de colección
let numeros: number[] = [1, 2, 3, 4, 5]; // Array de números

let personas: Persona[] = [
    { nombre: "Carlos", edad: 28 },
    { nombre: "Ana", edad: 32 },
];

let diccionario: Record<string, string> = {
    clave1: "valor1",
    clave2: "valor2",
};

// Función que utiliza tipos genéricos
function obtenerValor<T>(objeto: T, clave: keyof T): T[keyof T] {
    return objeto[clave];
}

let valorObtenido = obtenerValor(diccionario, "clave1"); // valorObtenido tiene tipo string

console.log(nombre);
console.log(colorFavorito);
console.log(empleado);
console.log(numeros);
console.log(personas);
console.log(diccionario);
console.log(valorObtenido);