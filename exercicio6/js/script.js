let entrada = prompt("Digite seu nome.");
let caracteres = entrada.length;
let letras = 0;

while(true){
    const tamanho = entrada.length;
    entrada = entrada.replace(" ", "");
    if(tamanho==entrada.length){
        break;
    }
}
letras=entrada.length;

alert(`${caracteres} caracteres e ${letras} letras.`)