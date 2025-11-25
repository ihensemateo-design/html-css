// Operadorse de Comparacion: Símbolos que se usan para comparar dos valores y obtener como resultado true o false. 

let numero = 13;
let numero1 = 13;

let resultado = numero == numero1;

console.log(resultado); // True or False

// https://www.ibm.com/docs/es/cics-ts/5.6.0?topic=expressions-comparison-operators

// Operadores Logicos: símbolos que se usan en programación para combinar condiciones y obtener un resultado verdadero (true) o falso (false)

let valor = 12;
let valor2 = 24;

let afirmacion1 = valor1 > valor2;

let afirmacion2 = num1 == num2;

//

let resultado2 = valor && valor2; // "&&" Devuelve verdadero solamente si todo es verdadero

let resultado3 = valor || valor2; //  "||"" Con que 1 sola sea verdadero ya es TRUE, solo si las 2 son falsas devuelve FALSE

let resultado4 = !valor; // "!" Si es verdadero lo convierte en falso, si esverdadero lo convierte en falso

console.log()

// let resultado = true;

let num1 = 12;
let num2 = 24;
let num3 = 25;
let num4 = 92;
let num5 = 91;

op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);

console.log(op)
