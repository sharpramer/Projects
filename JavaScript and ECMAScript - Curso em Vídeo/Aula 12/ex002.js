var agora = new Date();
var hora = agora.getHours(); // Pega hora sistema
console.log(`São exatamente ${hora} horas bicho!`)
if (hora < 12)
{
    console.log('Bom dia')
}
else if (hora > 12 && hora < 18)
    console.log('Boa tarde')
else
    console.log('Boa noite')