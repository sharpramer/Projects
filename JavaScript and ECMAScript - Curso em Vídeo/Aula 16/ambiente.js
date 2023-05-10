let num = [5, 8, 7, 4, 5] // declaração array
let pos = num.indexOf(878)

num.push(1) // adiciona numero ao vetor na última posição 
num.sort() // coloca vetor em ordem 
console.log(num) // mostra vetor
console.log(`Nosso vetor tem ${num.length} posições`) // mostra quantas posições tem o array
console.log(`O primeiro valor é ${num[0]}`) // mostra o valor do indice do vetor

if (pos == -1) {
    console.log(`Valor não existe`)
} 
else {
    console.log(`O valor 8 esta na posicao ${pos}`)   
}