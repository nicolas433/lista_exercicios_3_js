const nome = prompt("Digite seu nome.");
const pos  = parseInt(prompt("Digite um número."));

if(pos>nome.length || pos<0){
    alert("erro");
}else{
    alert(nome.charAt(pos));
}