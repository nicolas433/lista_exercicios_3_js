let media=0;
let contador=0;
while(true){
    let entrada = prompt();
    if(entrada=="fim"){
        break;
    }
    media+=parseFloat(entrada);
    contador++;
}
alert(media/contador);