const textArea = document.querySelector('.text-area');
const message = document.querySelector('.message');
const overlay = document.querySelector('.overlay');
const information = document.getElementById('information')
const paragraphElement = information.querySelector("p");

const btnEcrypt = document.getElementById('btn-encrypt')
const btnDecrypt = document.getElementById('btn-decrypt')
const btnCopy = document.getElementById('btn-copy')

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

function verifyText(value) {
    let error = false;
    for (let i = 0; i < value.length; i++) {
        code = value.charCodeAt(i);
        if (!(code >= 97 && code <= 122) || !code == 32 || !code == 241) {
            error = true
            break;
        }
    }
    return error;
}

function encrypt(word) {
    word = word.toLowerCase()
    for (let i = 0; i < encryptionCodes.length; i++) {
        if (word.includes(encryptionCodes[i][0])) {
            word = word.replaceAll(encryptionCodes[i][0], encryptionCodes[i][1])
        }
    }
    return word
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


function copy(text) {
    if (!text == "") {
        navigator.clipboard.writeText(text)
            .then(() => {    
                alert("Texto copiado con exito.");
            })
            .catch(() => {
                alert("Error, el texto no pudo ser copiado.");
            });
    }
}

function copyToClipboard() {
    const textarea = document.getElementById("myTextarea");
    textarea.select();
    document.execCommand("copy");
  }


btnEcrypt.addEventListener("click", () => {    
    if(textArea.value.length == 0) {
        alert('Ingresa texto')
    }
    const error = verifyText(textArea.value)
    if (error) {
        paragraphElement.style.color = "red";
        return;
    }
    const encryptedText = encrypt(textArea.value);
    message.value = encryptedText;
    textArea.value = "";
    paragraphElement.style.color = "#495057";
    overlay.style.display = "none";
    btnCopy.style.display = "block";

});

btnDecrypt.addEventListener("click", () => {
    if(textArea.value.length == 0) {
        alert('Ingresa texto')
    }
    const error = verifyText(textArea.value)
    if (error) {
        paragraphElement.style.color = "red";
        return;
    }
    const decryptedText = decrypt(textArea.value);
    message.value = decryptedText;
    textArea.value = "";
    paragraphElement.style.color = "#495057";
    overlay.style.display = "none";
    btnCopy.style.display = "block";
});

btnCopy.addEventListener("click", () => {
    const text = message.value
    console.log(text);
    copy(text);
});