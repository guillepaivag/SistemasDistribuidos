const { mergeSort, bubbleSort } = require('./src/algorithm/sortAlgorithms')

const listaDesordenada = [5, 7, 6, 1, 4, 2, 3, 9, 8]
console.log(`Lista desordenada: `, listaDesordenada)

let listaOrdenada = mergeSort(listaDesordenada)
console.log(`Lista ordenada por MergeSort: `, listaOrdenada)

const listaDesordenada2 = [5, 7, 6, 1, 4, 2, 3, 9, 8, 22]
console.log(`Lista desordenada: `, listaDesordenada2)

let listaOrdenada2 = bubbleSort(listaDesordenada2)
console.log(`Lista ordenada por BubbleSort: `, listaOrdenada2)