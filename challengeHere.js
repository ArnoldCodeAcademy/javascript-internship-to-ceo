// Solution with for - loops

let biDirectionalArray = [["John", 169], ["Jane", 112], ["Thomas", 145], ["Mel", 189], ["Charley", 158]];

let numbers = extractColumn(biDirectionalArray, 1);
console.log(numbers);

function extractColumn(array, columnNumber) {
    let arrayColumn = [];

    for (let i = 0; i < array.length; i++) {
        arrayColumn.push(array[i][columnNumber]);
    }

    return arrayColumn;
}

// Solution for pro developer!

let numbersPro = extractColumnPro(
    {
        matrix: biDirectionalArray,
        columnIndex: 1
    });
console.log(numbersPro);

function extractColumnPro({matrix = [], columnIndex = 0} = {}) {
    return matrix.map(row => {
        return row[columnIndex];
    });
}


// EXPLANATION in README.MD
