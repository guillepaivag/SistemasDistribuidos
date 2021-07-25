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

sortAlgorithms.bubbleSort = (array) => {
    let swapped = true;
    do {
        swapped = false;
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return array;
}

module.exports = sortAlgorithms