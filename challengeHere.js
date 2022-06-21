// Solution #10
function summarizeArray(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

let array = [1, 9, -19, 3, 5, 3, 7, 14, 91]
let sum = summarizeArray(array);
console.log(sum);
// EXPLANATION in README.MD
