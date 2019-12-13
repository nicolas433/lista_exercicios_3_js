(function(){
    const dataAtual = new Date();
    const horaAtual = dataAtual.getHours();

    (horaAtual<=5)? alert("Boa madrugada") : 
    (horaAtual<=12)? alert("Bom dia") : 
    (horaAtual<=18)? alert("Boa tarde") : 
    alert("Boa noite");
})();
