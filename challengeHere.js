// Solution with for - loops

let text = "Learning to Code with Arnold Code Academy brings me joy.";

console.log(getWords(text));

function getWords(text)
{
    let startWord = -1;
    let array = [];

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
            array.push(word);

            startWord = -1;
        }
    }

    return array;
}

function isSeparator(character)
{
    let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
    return separators.includes(character);
}


// Solution for pro developer!

console.log(getWordsPro(text));

function getWordsPro(text){

    text = text.replace(/(^\s*)|(\s*$)/gi,"");
    text = text.replace(/[ ]{2,}/gi," ");

    return text.split(' ').map(x => x);
}


// EXPLANATION in README.MD
