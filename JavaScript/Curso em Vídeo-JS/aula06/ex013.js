var agora = new Date()
var diasem = agora.getDay()
/* Para o JavaScript os dia da semana sao contados dessa forma
0 = Domingo
1 = segunda
2 = terca
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/

switch(diasem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terca')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia invalido')

}

