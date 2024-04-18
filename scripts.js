let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+{};~?,./";
function generatePass(){
    let length = parseInt(document.querySelector("#length").value);
    let passString = "";
    let charSet = "";
    charSet += lowerCase;
    let upperChecked = document.querySelector("#upperCase").checked;
    let numberChecked = document.querySelector("#numbers").checked;
    let symbolsChecked = document.querySelector("#symbols").checked;
    console.log(upperChecked);
    if(upperChecked == true){
        charSet += upperCase;
    }
    if(numberChecked == true){
        charSet += numbers;
    }
    if(symbolsChecked == true){
        charSet += symbols;
    }
    for(let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * charSet.length);
        passString += charSet[randomIndex];
    }
    document.getElementById("password").value = passString;
    console.log(passString);
};
    