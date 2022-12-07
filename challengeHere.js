// Solution with for - loops

const text = "Very good Sir! Just make sure you finish on the Bach, never finish on Debussy!"

const wordsCount = countWords(text);

console.log(wordsCount);

function countWords(text) {
    let wasSeparator = true;
    let words = 0;

    for (let character of text) {
        if (isSeparator(character)) {
            wasSeparator = true;
            continue;
        }

        if (wasSeparator) {
            words++;
            wasSeparator = false;
        }
    }

    return words;
}

function isSeparator(character) {
    const separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(character);
}

// Solution for pro developer!

console.log(countWordsPro(text));

function countWordsPro(text){

    text = text.replace(/(^\s*)|(\s*$)/gi,"");
    text = text.replace(/[ ]{2,}/gi," ");

    return text.split(' ').length;
}

// EXPLANATION in README.MD
