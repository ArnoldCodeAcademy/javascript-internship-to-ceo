// Solution with for - loops

let array = [3, 9, [17, [22], [19, 14]], [99]];

console.log(sumArray(array));

function sumArray(array) {
    let sum = 0;

    for (let element of array) {
        if (Array.isArray(element)) {
            element = sumArray(element);
        }

        sum += element;
    }

    return sum;
}


// Solution for pro developer!

console.log(sumArrayPro(array))

function sumArrayPro(array) {
    return array.reduce((sum, element) => sum + (Array.isArray(element) ? sumArray(element) : element), 0);
}

// EXPLANATION in README.MD
