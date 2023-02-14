// Solution with for - loops

let text = "I LIKE ARNOLDCODE AND JAVASCRIPT";
let textEnc = encrypt(text, 13);
let textDec = decrypt(textEnc, 13);

console.log(text);
console.log(textEnc);
console.log(textDec);

// Decrypt a message by using the same encrypt function
// ... but using the inverse of the key (e.g. rotate in the other direction)

function decrypt(msg, key) {
    return encrypt(msg, key * -1);
}

// Function will implement Caesar Cipher to
// encrypt / decrypt the msg by shifting the letters
// of the message acording to the key

function encrypt(message, key) {
    let encryptedMessage = "";

    for (let i = 0; i < message.length; i++) {
        let code = message.charCodeAt(i);

        // Encrypt only letters in 'A' ... 'Z' interval
        if (code >= 65 && code <= 65 + 26 - 1) {
            code -= 65;
            code = mod(code + key, 26);
            code += 65;
        }

        encryptedMessage += String.fromCharCode(code);
    }

    return encryptedMessage;
}


// Modulo function: n mod p
function mod(number, moduloDivisor) {
    if (number < 0)
        number = moduloDivisor - Math.abs(number) % moduloDivisor;

    return number % moduloDivisor;
}

// Solution for pro developer!

let textEncPro = encryptPro(text, 13);
let textDecPro = encryptPro(textEnc, -13);

console.log(textEncPro);
console.log(textDecPro);

function encryptPro(message, key) {
    return message.split('')
        .map(char =>
            String.fromCharCode(
                char.charCodeAt(0) >= 65
                && char.charCodeAt(0) <= 90 ? 65
                    + mod(char.charCodeAt(0) - 65 + key, 26)
                    : char.charCodeAt(0)))
        .join('');
}

// EXPLANATION in README.MD
