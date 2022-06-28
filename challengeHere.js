// Solution #11
function averageArray(array) {
    let length = array.length;
    let sum = 0;

    for (let i = 0; i < length; i++) {
        sum += array[i];
    }

    return sum / length;
}

let array = [2, 5, 17, 81, 9];
let average = averageArray(array);

console.log("Average: ", average);
// EXPLANATION in README.MD
