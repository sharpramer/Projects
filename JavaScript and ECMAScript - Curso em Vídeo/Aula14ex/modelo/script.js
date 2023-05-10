function calc() {
    var num = document.getElementById('nmb_Numero')
    var tab = document.getElementById('seltab')
    if (num.value.lenght == 0) {
        window.alert('[ERRO] Favor digitar um número!')
    }
    else{
        let n = Number(n.value)
        let c = 0;
        tab.innerHTML = ''
        while (Number(c) < 11){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
            c++;
        }
    }
    
}
