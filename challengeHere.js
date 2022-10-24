// Solution with for - loops
let array1 = [9, 8, 7, 6];
let array2 = [1, 2, 3, 4];

let mergedArrays = mergeArrays(array1, array2);
console.log(mergedArrays);

function mergeArrays(array1, array2)
{
    let tempArray = [];

    for(let element of array1)
    {
        tempArray.push(element);
    }

    for(let element of array2)
    {
        tempArray.push(element);
    }

    return tempArray;
}

// Solution for pro developer!
let mergedArraysPro = mergeArraysPro(array1, array2);
console.log(mergedArraysPro);

function mergeArraysPro(array1, array2)
{
    return array1.concat(array2)
}
// EXPLANATION in README.MD
