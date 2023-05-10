function contar(){
    let ini = document.getElementById('nmb_inicio')
    let fim = document.getElementById('nmb_fim')
    let pas = document.getElementById('nmb_passo')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Nao e possivel contrar'
        window.alert('[ERRO] Faltam dados')
    }
    else{
        res.innerHTML = 'Contando: <br>'
        
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        
        if (p <= 0){
            window.alert('Passo inválido meu chapa')
            p = 1
        }
        if (i < f) { // contagem cresente
            for (let c = i; c < f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }    
        }
        else{ // contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}