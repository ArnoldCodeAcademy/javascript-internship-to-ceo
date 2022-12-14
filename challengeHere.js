// Solution with for - loops

console.log(capitalizeFirstLetter("javascript and arnold code academy are the best to me!"));

function capitalizeFirstLetter(text) {
    let tempText = "";

    for (let i = 0; i < text.length; i++) {
        let currentCharacter = text[i];
        let previousCharacter = i > 0 ? text[i - 1] : " ";

        if (!isSeparator(currentCharacter) && isSeparator(previousCharacter)) {
            currentCharacter = currentCharacter.toUpperCase();
        }

        tempText += currentCharacter;
    }

    return tempText;
}

function isSeparator(character) {
    let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
    return separators.includes(character);
}


// Solution for pro developer!

console.log(capitalizeFirstLetterPro("javascript and arnold code academy are the best to me!"))

function capitalizeFirstLetterPro(text) {
    return text.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(" ")
}

// EXPLANATION in README.MD
