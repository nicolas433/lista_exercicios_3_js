let maior = 0;
let menor = 0;
while(true){
    let entrada = prompt();
    if(entrada=="fim"){
        break;
    }
    entrada = parseFloat(entrada);
    if(entrada>=18){
        maior++;
    }else{
        menor++;
    }
}

alert(`${maior} maiores e ${menor} menores de 18 anos`);