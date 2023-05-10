function adicionar() {
    var num = document.getElementById('nmb_Num')
    var adc = document.getElementById('slc_Adc')
    var res = document.getElementById('res')
    let valores = []

    if(num.length == 0 || num == 0 || num > 100){
        window.alert('Favor colocar um número de 1 a 100 e que não esteja na lista')
    }
    else{
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${valores} foi adicionado com sucesso`
        adc.appendChild(item)
        
        /* for (let i = 0; i < valores.length; i++) {
            if (valores[i] > maior){
                maior = valores[i]
            }
        }
        for (let i = 0; i < valores.length; i++) {
            if (valores[i] < menor){
                menor = valores[i]
            }
        } 
        res.innerHTML = `Somando todos os valores temos: ${soma} <br>`
        res.innerHTML = `A média dos números é: ${media} <br>`*/
    }
    num.value = ''
    num.focus()
}   

function finalizar() {
    if(valores.length == 0){
        window.alert('deu bosta')
    }
    else{
        let tot = valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
    }

}