// Solution with for - loops

let charFrequency = getCharFrequency("Arnold Code Academy!");
console.table(charFrequency);

function getCharFrequency(text) {
    let array = [];

    text = text.toLowerCase().match(/[a-z]/g);

    for (let character of text) {
        updateFrequency(array, character);
    }

    return array;
}

function updateFrequency(array, character) {
    for (let el of array) {
        if (el.chr === character) {
            el.count++;
            return;
        }
    }

    array.push({ chr: character, count: 1 });
}

// Solution for pro developer!

const getCharFrequencyPro = text => Array.from(text.toLowerCase().matchAll(/[a-z]/g), ([chr]) => ({ chr, count: 1 }))
    .reduce((acc, el) => (acc.has(el.chr) ? acc.get(el.chr).count++ : acc.set(el.chr, el), acc), new Map()).values();

console.table([...getCharFrequencyPro("Arnold Code Academy!")]);

// EXPLANATION in README.MD
