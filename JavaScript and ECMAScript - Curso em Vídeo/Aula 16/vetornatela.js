let valores = [8, 1, 5, 6, 9]
valores.sort()

for (let pos = 0; pos < valores.length; pos++) { // Mostrar array atraves do for
    console.log(`a posicao ${pos} tem o valor ${valores[pos]}`);
}

for(let pos in valores){ // Mostrar array atraves do for in
    console.log(`a posicao ${pos} tem o valor ${valores[pos]}`);
}