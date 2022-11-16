// Solution with for - loops
let distinctElements = getDistinctElements([12, 12, 3, 6, -1, 21, 9, 7, 10, 12,6 ,- 69, -1, 100]);
console.log(distinctElements);

function getDistinctElements(array)
{
    let tempArray = [];

    for(let i = 0; i < array.length; i++)
    {
        if (!isInArray(array[i], tempArray))
        {
            tempArray.push(array[i]);
        }
    }

    return tempArray;
}

function isInArray(number, array)
{
    for(let i = 0; i < array.length; i++)
    {
        if (array[i] === number)
            return true;
    }

    return false;
}


// Solution for pro developer!

console.log(getDistinctElementsPro([12, 12, 3, 6, -1, 21, 9, 7, 10, 12,6 ,- 69, -1, 100]))

function getDistinctElementsPro(array){
    return array.filter((v, i, a) => a.indexOf(v) === i);
}

// EXPLANATION in README.MD
