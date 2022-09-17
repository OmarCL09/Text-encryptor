//Selectors of the DOM  
let encryptButton = document.querySelector("#encryptButton");
let desencryptButton = document.querySelector("#desencryptButton");

let containerEncryptedText = document.querySelector("#encryption-found");
let containerNotFoundText = document.querySelector("#encryption-not-found");
let encryptedTextInScreen = document.querySelector("#found-text");


let copyTextButton = document.querySelector("#copy-text-button");

//Encryptor and Decryptor functions
const encrypterData = {
    a:'ai',
    e:'enter',
    i:'imes',
    o:'ober',
    u:'ufat'
};

let desencrypterData = {};

for(let key in encrypterData){
    desencrypterData[encrypterData[key]] = key;
}

function encrypt(stringToEncrypt) {
    let encryptedString = '';

    for(let i = 0; i <= stringToEncrypt.length; i++ ) {
        let char = stringToEncrypt.charAt(i);

        if(!encrypterData[char]){
            encryptedString += char;
        }else{
            encryptedString += encrypterData[char];
        }
    }
    return encryptedString;
}

function desencrypt(stringToDesencrypt) {
    for(let i = 0; i <= stringToDesencrypt.length; i++){
        for(let key in desencrypterData) {
            if(stringToDesencrypt.includes(key)){
                let toReplaceString = key;
                stringToDesencrypt = stringToDesencrypt.replace(toReplaceString, desencrypterData[key] ) 
            }
        }
    }
    return stringToDesencrypt;
}

encryptButton.addEventListener("click",(e)=>{
    let textToEncrypt = document.querySelector("#textToEncrypt").value;

    containerNotFoundText.classList.add('disabled');
    containerEncryptedText.classList.remove('disabled');

    encryptedTextInScreen.innerHTML = encrypt(textToEncrypt);
})

desencryptButton.addEventListener("click",(e)=>{
    let textToDesencrypt = document.querySelector("#textToEncrypt").value;

    containerNotFoundText.classList.add('disabled');
    containerEncryptedText.classList.remove('disabled');

    encryptedTextInScreen.innerHTML = desencrypt(textToDesencrypt);
    
})

copyTextButton.addEventListener("click",(e)=>{
    e.preventDefault();
    let text = document.querySelector("#found-text").textContent;
 
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
})