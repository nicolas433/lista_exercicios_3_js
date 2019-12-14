const entrada = prompt("Digite seu nome.");
let valido = true;


function validate1(entrada){
    const aux = entrada.split(" ");
    if(aux[0].length<4){
        alert("Primeiro nome precisa conter mais que 4 caracteres.");
        valido = false;
    }
}

function validate2(entrada){
    const aux = entrada.split(" ");
    aux.forEach(element => {
        if(element == "do" || element == "da" || element == "de"){

        }else if(element[0]!=element[0].toUpperCase()){
            alert(`Primeiro caractere da palavra " ${element} " precisa ser maiusculo.`);
            valido = false;
        }
    });
}

function validate3(entrada){
    const aux = entrada.split(" ");
    if(!aux[1]){
        alert(`Deve existir pelo menos um sobrenome.`);
        valido = false;
    }
}

function validate4(entrada){
    for(let i = 0; i < entrada.length; i++) {
        const istoEUmTexto = isNaN(parseFloat(entrada[i]));
        if(!istoEUmTexto){
            alert(`Nao pode existir numero em nenhuma parte do nome.`);
            valido = false;
            break;
        }
    }
}

validate1(entrada);
validate2(entrada);
validate3(entrada);
validate4(entrada);

if(valido === true){
    alert("Nome válido.")
}else{
    alert("Nome invalido.")
}
