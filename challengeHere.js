// Solution to Challenge 50

const plaintext = "HELLO WORLD";
const keyword = "SECRET";

const ciphertext = vigenereEncrypt(plaintext, keyword);

console.log(`Encrypted: ${ciphertext}`); // Outputs: XMCKL QBKHU

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


