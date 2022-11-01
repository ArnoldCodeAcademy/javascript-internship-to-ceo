// Solution with for - loops
let array1 = [1, 9, 17, 15, 3, 9, 15];
let array2 = [1, 9, 3, 2, 17];

let exclusivelyMergedArray = mergeExclusive(array1, array2);
console.log(exclusivelyMergedArray);

function mergeExclusive(array1, array2)
{
    let tempArray = [];

    for(let element of array1)
    {
        if (!array2.includes(element))
        {
            tempArray.push(element);
        }
    }

    for(let element of array2)
    {
        if (!array1.includes(element))
        {
            tempArray.push(element);
        }
    }

    return tempArray;
}


// Solution for pro developer!
let mergedArraysPro = mergeArrays(array1, array2);
console.log(mergedArraysPro);

function mergeArrays(array1, array2)
{
    return array1.filter(element => !array2.includes(element)).concat(array2.filter(element => !array1.includes(element)))
}

// EXPLANATION in README.MD
