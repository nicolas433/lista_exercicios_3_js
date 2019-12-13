const entrada = prompt("Digite seu nome.");

function validate1(entrada){
    const aux = entrada.split(" ");
    if(aux[0].length<4){
        alert("Primeiro nome precisa conter mais que 4 caracteres.");
    }
}

function validate2(entrada){
    const aux = entrada.split(" ");
    aux.forEach(element => {
        if(element == "do" || element == "da" || element == "de"){

        }else if(element[0]!=element[0].toUpperCase()){
            alert(`Primeiro caractere da palavra " ${element} " precisa ser maiusculo.`);
        }
    });
}

function validate3(entrada){
    const aux = entrada.split(" ");
    if(!aux[1]){
        alert(`Deve existir pelo menos um sobrenome.`);
    }
}

function validate4(entrada){
    for(let i = 0; i < entrada.length; i++) {
        if(parseFloat(entrada[i]) != NaN){
            alert(`Não pode existir número em nenuma parte do nome.`);
            break;
        }
    }
}


validate1(entrada);
validate2(entrada);
validate3(entrada);
validate4(entrada);