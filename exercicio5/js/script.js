let entrada = prompt("Digite uma data no formato DD/MM/AAAA.");
const data = entrada.split("/");
document.write(`Dia ${data[0]} do ${data[1]} de ${data[2]}.`);