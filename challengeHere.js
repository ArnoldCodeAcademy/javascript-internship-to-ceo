// Solution with for - loops

let text = "This function needs to return the longest word in this phrase. Will it be ArnoldCodeAcademy?!";

console.log(getLongestWords(text));

function getLongestWords(text)
{
    let words = getWords(text);

    let maxWordSize = 0;
    let maxPositions = [];

    for(let i = 0; i < words.length; i++)
    {
        let currentWordSize = words[i].length;

        if (currentWordSize > maxWordSize)
        {
            maxWordSize = currentWordSize;
            maxPositions = [ i ];
        }
        else if (currentWordSize === maxWordSize)
        {
            maxPositions.push(i);
        }
    }

    return getElements(words, maxPositions);
}

// Get only the elements from specified positions from the array
function getElements(array, arrayPosition)
{
    let tempArray = [];

    for(let position of arrayPosition)
    {
        tempArray.push(array[position]);
    }

    return tempArray;
}

// Returns an array with the words from specified text
function getWords(text)
{
    let startWord = -1;
    let tempArray = [];

    for(let i = 0; i <= text.length; i++)
    {
        let character = i < text.length ? text[i] : " ";

        if (!isSeparator(character) && startWord < 0)
        {
            startWord = i;
        }

        if (isSeparator(character) && startWord >= 0)
        {
            let word = text.substring(startWord, i);
            tempArray.push(word);

            startWord = -1;
        }
    }

    return tempArray;
}

function isSeparator(character)
{
    let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
    return separators.includes(character);
}

// Solution for pro developer!

const getLongestWordsPro = (text) =>
    text
        .match(/[^\s.,;!?()]+/g)
        .reduce(
            (longestWords, word) =>
                word.length > longestWords[0].length
                    ? [word]
                    : word.length === longestWords[0].length
                        ? [...longestWords, word]
                        : longestWords,
            [""]
        )
        .filter((word) => word !== "");

const textPro = "This function needs to return the longest word in this phrase. Will it be ArnoldCodeAcademy?!";
console.log(getLongestWordsPro(textPro));

// EXPLANATION in README.MD
