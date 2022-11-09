// Solution with for - loops
let array1= [12, 21, 34, 1, 35, 7, 19];
let array2 = [-1, 7, 1, 61, 69];

let leftMergedArray = mergeLeft(array1, array2);
console.log(leftMergedArray);

function mergeLeft(array1, array2)
{
    let tempArray = [];

    for(let element of array1)
    {
        if (!array2.includes(element))
        {
            tempArray.push(element);
        }
    }

    return tempArray;
}


// Solution for pro developer!
let leftMergedArrayPro = mergeLeftPro(array1, array2);
console.log(leftMergedArrayPro);

function mergeLeftPro(array1, array2)
{
    return array1.filter(element => !array2.includes(element))
}



// EXPLANATION in README.MD
