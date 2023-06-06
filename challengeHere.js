// Solution to Challenge 51

const plaintext = "HELLO WORLD";
const keyword = "SECRET";
const ciphertext = vigenereEncrypt(plaintext, keyword);
console.log(ciphertext); // Outputs: XMCKL QBKHU

function vigenereEncrypt(plaintext, keyword) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const input = plaintext.toUpperCase();
    const key = keyword.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (alphabet.includes(char)) {
            const charIndex = alphabet.indexOf(char);
            const keyCharIndex = alphabet.indexOf(key[keyIndex % key.length]);
            const encryptedCharIndex = (charIndex + keyCharIndex) % alphabet.length;

            result += alphabet[encryptedCharIndex];
            keyIndex++;
        } else {
            result += char;
        }
    }

    return result;
}

const decryptedPlainText = vigenereDecrypt(ciphertext, keyword);
console.log(decryptedPlainText);

function vigenereDecrypt(ciphertext, keyword) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const input = ciphertext.toUpperCase();
    const key = keyword.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (alphabet.includes(char)) {
            const charIndex = alphabet.indexOf(char);
            const keyCharIndex = alphabet.indexOf(key[keyIndex % key.length]);
            const decryptedCharIndex = (charIndex - keyCharIndex + alphabet.length) % alphabet.length;

            result += alphabet[decryptedCharIndex];
            keyIndex++;
        } else {
            result += char;
        }
    }

    return result;
}
