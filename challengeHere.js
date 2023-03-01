// Solution with for - loops

let array = [23, 999, 777,512, 1000, 1, -1, 8, 3];

console.log(array);

bubbleSort(array);

console.log(array);

function bubbleSort(array)
{
    let shouldSort = true;
    let length = array.length;

    while(shouldSort)
    {
        shouldSort = false;
        length--;

        for(let i = 0; i < length; i++)
        {
            let a = array[i];
            if ( a > array[i+1] )
            {
                array[i] = array[i+1];
                array[i+1] = a;
                shouldSort = true;
            }
        }
    }
}


// Solution for pro developer!

console.log(bubbleSortPro(array));

function bubbleSortPro(array) {
    for(let i = 0; i < array.length; i++) {
        array.sort((a, b) => a - b);
    }
    return array;
}


// EXPLANATION in README.MD
