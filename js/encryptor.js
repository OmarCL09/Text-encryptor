const encrypterData = {a:'ai',e:'enter',i:'imes',o:'ober',u:'ufat'}
let desencrypterData = {};

for(let key in encrypterData){
    desencrypterData[encrypterData[key]] = key;
}

function encrypt(stringToEncryp) {
    let encryptedString = '';

    for(let i = 0; i <= stringToEncryp.length; i++ ) {
        let char = stringToEncryp.charAt(i);

        if(!encrypterData[char]){
            encryptedString += char;
        }else{
            encryptedString += encrypterData[char];
        }
    }
    return encryptedString
}

function desencrypt(stringToDesencryp) {
    
    for(let i = 0; i <= stringToDesencryp.length; i++){
        for(let key in desencrypterData) {
            if(stringToDesencryp.includes(key)){
                let toReplaceString = key;
                stringToDesencryp = stringToDesencryp.replace(toReplaceString, desencrypterData[key] ) 
            }
        }
    }
    return stringToDesencryp
}

const encryptResult = encrypt('Gato')
const desencrypResult = desencrypt(encryptResult)
console.log(encryptResult)
console.log(desencrypResult)