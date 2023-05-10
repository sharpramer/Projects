function verificar() {
    var data = new Date();
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique a data de nascimento')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade > 10){
                window.alert('bebe')
                //img.setAttribute('src', 'menino.png')
            }
            else if (idade < 50){
                window.alert('homem')
                img.setAttribute('src', 'homem.png')
            }
            else if (idade > 50){
                img.setAttribute('src', 'velho.png')
            }
        }
        else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade >= 14){
                img.setAttribute('src', 'menina.png')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'mulher.png')   
            }
            else{
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} com ${idade} de idade`
        res.appendChild(img)
    }
}