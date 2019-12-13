Lista de exercicios 3

Execute cada um dos exercícios a seguir usando Javascript.

1. Calcule a média de diversas notas digitadas pelo usuário. Use
prompt, alert e confirm em sua resposta. Seu programa finaliza
quando a palavra "fim" for digitada.

2. Peça ao usuário para digitar 5 números em uma caixa de diálogo do
tipo prompt (o usuário digitará um por vez). Verifique qual é o
maior número e exiba-o usando alert.

3. Peça ao usuário para digitar vários nomes. Exiba na tela todos os
nomes digitados, porém de maneira invertida (do último para o
primeiro). Não use array. Seu programa finaliza quando a palavra
"fim" for digitada.

4. Peça ao usuário para digitar várias idades. Exiba quantas pessoas
são maior de idade (18 anos) e quantas são menores. Seu programa
finaliza quando a palavra "fim" for digitada.

5. Peça para o usuário digitar uma data no formato DD/MM/AAAA.
Exiba separadamente o dia, o mês e o ano. Não use array. Mostre
dentro da página usando document.write().

6. Solicite o nome completo do usuário. Exiba quantas letras (espaço
não conta) e quantos caracteres (espaço conta) possui o nome
digitado.

7. Receba o nome completo do usuário e faça a validação seguindo as
seguintes regras:
  - O primeiro nome precisa conter pelo menos 4 caracteres
  - A primeira letra de cada parte (exceto de, da, do) do nome deve 
   ser maíuscula (ex. Jose)
  - Deve existir pelo menos um sobrenome
  - Não pode existir número em nenuma parte do nome
  - Ao validar, mostrar se o nome é válido ou inválido. Use funções.

8. Receba o nome completo do usuário e, em seguida, solicite um
número. De acordo com o número, mostre o caractere
correspondente. Caso o número seja 0, negativo ou maior que o
total de caracteres, exiba uma mensagem de erro. Use funções.

10. Ao abrir a página, automáticamente, mostre para o usuário uma
caixa de diálogo com uma saudação. A saudação deve variar de
acordo com o horário do dia. O código a seguir mostra como
conseguir a hora atual. Use IIFE.

// pegar data atual
const dataAtual = new Date();
// pegar a hora do dia
const horaAtual = dataAtual.getHours();
// mostrar hora atual
alert("São exatemente " + horaAtual + " horas");
