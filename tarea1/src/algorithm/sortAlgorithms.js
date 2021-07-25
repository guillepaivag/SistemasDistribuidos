const sortAlgorithms = {}

const utilsSortAlgorithms = require('../utils/sortAlgorithms')
const { merge } = utilsSortAlgorithms

sortAlgorithms.mergeSort = (array) => {

    if (array.length <= 1) return array
    
    let mid = Math.floor(array.length / 2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)
    
    return merge(sortAlgorithms.mergeSort(left), sortAlgorithms.mergeSort(right))
}

module.exports = sortAlgorithms