// Solution with for - loops

let data = "Arnold;Abraham;On;Medium\nRead;Amazing;Programming;Content";

let array = csvToArray(data);

console.log(JSON.stringify(array));

function csvToArray(data)
{
    let arrays = data.split("\n");

    for(let i = 0; i < arrays.length; i++)
    {
        let lineOfWords = arrays[i].split(";");
        arrays[i] = lineOfWords;
    }

    return arrays;
}

// Solution for pro developer!

console.log(csvToArrayPro(data))

function csvToArrayPro(data)
{
   return data.split("\n").map(x => x.split(';').map(x => x));
}

// EXPLANATION in README.MD
