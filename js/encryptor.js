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

function desencrypt(stringToDesencryp) {
    for(let i = 0; i <= stringToDesencryp.length; i++){
        for(let key in desencrypterData) {
            if(stringToDesencryp.includes(key)){
                let toReplaceString = key;
                stringToDesencryp = stringToDesencryp.replace(toReplaceString, desencrypterData[key] ) 
            }
        }
    }
    return stringToDesencryp;
}

const encryptResult = 'fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!';
const desencryptResult = desencrypt(encryptResult)
console.log(desencryptResult)