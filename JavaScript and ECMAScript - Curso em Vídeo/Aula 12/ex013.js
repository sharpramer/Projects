var agr = new Date()
var Dia = agr.getDay()
/*
    0 = Domingo
    0 = Segunda
    0 = Terça
    0 = Quarta
    0 = Quinta
    0 = Sexta
    0 = Sabado
*/
switch(Dia){
    case 0:
        console.log('Domingo')
        break;
    case 1:
        console.log('Segunda')
        break;
    case 2:
        console.log('Terça')
        break;
    case 3:
        console.log('Quarta')
        break;
    case 4:
        console.log('Quinta')
        break;
    case 5:
        console.log('Sexta')
        break;
    case 6:
        console.log('Sábado')
        break;
    default:
        console.log('[ERRO] Dia da semana invalido')
}