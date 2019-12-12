let saida = "";

while(true){
    let entrada = prompt();
    if(entrada=="fim"){
        break;
    }
    entrada +=  "    ";
    entrada +=  saida;
    saida    =  entrada;
}
alert(saida);