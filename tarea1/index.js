const { mergeSort } = require('./src/algorithm/sortAlgorithms')

const listaDesordenada = [5, 7, 6, 1, 4, 2, 3, 9, 8]
console.log(`Lista desordenada: `, listaDesordenada)

let listaOrdenada = mergeSort(listaDesordenada)
console.log(`Lista ordenada por MergeSort: `, listaOrdenada)