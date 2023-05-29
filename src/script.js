const textArea = document.querySelector('.text-area');
const message = document.querySelector('.message');
const overlay = document.querySelector('.overlay');

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
const encryptionCodes = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function encrypt(word) {
    word = word.toLowerCase()
    for (let i = 0; i < encryptionCodes.length; i++) {
        if (word.includes(encryptionCodes[i][0])) {
            word = word.replaceAll(encryptionCodes[i][0], encryptionCodes[i][1])
        }
    }
    return word
}

function btnEcrypt() {
    const encryptedText = encrypt(textArea.value);
    message.value = encryptedText;
    textArea.value = "";
    overlay.style.display = "none";
    
}


function decrypt(word) {
    word = word.toLowerCase()
    for (let i = 0; i < encryptionCodes.length; i++) {
        if (word.includes(encryptionCodes[i][1])) {
            word = word.replaceAll(encryptionCodes[i][1], encryptionCodes[i][0])
        }
    }
    return word
}

function btnDecrypt () {
    const decryptedText = decrypt(textArea.value);
    message.value = decryptedText;
    textArea.value = "";
    // message.style.backgroundImage = "none";
}