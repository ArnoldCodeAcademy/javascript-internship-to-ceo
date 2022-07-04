// Solution #12
function getPositives(array) {
    let tempArray = [];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (element >= 0) {
            tempArray.push(element);
        }
    }

    return tempArray;
}

let array = [-65, 11, -5, 1, -19, 45, 19, 0, 1];
let positives = getPositives(array);

console.log(positives);
// EXPLANATION in README.MD
