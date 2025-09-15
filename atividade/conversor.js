// Pegando os argumentos digitados no terminal
const args = process.argv.slice(2);

// Pega os 3 valores: numero, unidade origem e destino
const valor = parseFloat(args[0]);
const origem = args[1];
const destino = args[2];

let resultado;

// Verificando os casos básicos de conversão
if (origem === "km" && destino === "milhas") {
  resultado = valor * 0.621371;
} else if (origem === "milhas" && destino === "km") {
  resultado = valor / 0.621371;
} else if (origem === "celsius" && destino === "fahrenheit") {
  resultado = (valor * 9/5) + 32;
} else if (origem === "fahrenheit" && destino === "celsius") {
  resultado = (valor - 32) * 5/9;
} else {
  console.log("Conversão não suportada.");
  process.exit(1); // sai do programa
}

// Mostra o resultado
console.log(valor + " " + origem + " é igual a " + resultado + " " + destino);
