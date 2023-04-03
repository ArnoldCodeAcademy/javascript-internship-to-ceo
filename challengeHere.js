// Solution with for - loops

let jaggedArray = [7, 1, -1, [10, 5, [78, , 89, 99], 5], [1, 19, 99], 0];

let max = findMax(jaggedArray);
console.log("Max  = ", max);

function findMax(array) {
    let max = -Infinity;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (Array.isArray(element)) {
            element = findMax(element);
        }
        if (element > max) {
            max = element;
        }
    }

    return max;
}


// Solution for pro developer!

console.log('Pro Max', findMaxPro(jaggedArray))

function findMaxPro(array) {
    return Math.max(...array.flat(Infinity));
}


// EXPLANATION in README.MD
