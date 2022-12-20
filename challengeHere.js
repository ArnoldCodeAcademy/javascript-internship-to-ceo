// Solution with for - loops

console.log(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));


function sumCSV(string)
{
    let array = string.split(",");

    let sum = 0;

    for(let number of array)
    {
        sum += parseFloat(number);
    }

    return sum;
}

// Solution for pro developer!

console.log(sumCSVLikeAPro("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"))

function sumCSVLikeAPro(string){
    return string.split(",").reduce((a, v) => parseFloat(a) + parseFloat(v));
}

// EXPLANATION in README.MD
