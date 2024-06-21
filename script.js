let inputSlider = document.getElementById('inputSlider')
let sliderValue = document.getElementById('sliderValue')
let passBox = document.getElementById('passBox')
let lowerCase = document.getElementById('lowerCase')
let upperCase = document.getElementById('upperCase')
let numbers = document.getElementById('numbers')
let symbols = document.getElementById('symbols')
let genBtn = document.getElementById('genBtn')
let copyBtn = document.getElementById('copy')

sliderValue.textContent = inputSlider.value

inputSlider.addEventListener('input', () => {

    sliderValue.textContent = inputSlider.value
});


genBtn.addEventListener('click', ()=>{
    passBox.value = generatePassword();
})

let lowercase = 'abcdefghijklmnopqrstuvwxyz'
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let number = '0123456789'
let symbol = '!@#$%^&*)_*(_+?><"|:;\.,][=-/'

function generatePassword(){
    let genPass = '';
    let allChars = '';

    allChars += lowerCase.checked ? lowercase : '';
    allChars += upperCase.checked ? uppercase : '';
    allChars += numbers.checked ? number : '';
    allChars += symbols.checked ? symbol : '';

    if(allChars == '' || allChars.length == 0){
        return genPass;
    }

    let i = 1;
    while(i <= inputSlider.value){

        genPass += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    
    return genPass;
}

copyBtn.addEventListener('click', ()=>{
    if(passBox.value != '' || passBox.value.length >= 1){

        navigator.clipboard.writeText(passBox.value);

        copyBtn.innerText = "check";

        copyBtn.title = "Password Copied";


        setTimeout(() => {
            copyBtn.title = "";
            passBox = "";
        }, 3000)
    }
})