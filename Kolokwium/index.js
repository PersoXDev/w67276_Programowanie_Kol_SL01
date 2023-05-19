function changeButtonBackground(id) {
    let button1 = document.getElementById('button1');
    let button2 = document.getElementById('button2');
    let button3 = document.getElementById('button3');

    if(id === 'button1'){
        button1.style.backgroundColor = "red";
        setBackgroundAsDefault(button2, button3)
    }else if(id === 'button2'){
        button2.style.backgroundColor = "yellow";
        setBackgroundAsDefault(button1, button3)
    }else if(id === 'button3'){
        button3.style.backgroundColor = "green";
        setBackgroundAsDefault(button1, button2)
    }
}

function setBackgroundAsDefault(element1, element2){
    element1.style.backgroundColor = "buttonface";
    element2.style.backgroundColor = "buttonface";
}
isSuccessful = true;

function submitForm(event){
    event.preventDefault();

    if(!checkLength(event.target['name'].value, 3))
        setCustomValidity("Login jest za krótki!", 'name')

    if(!isEmailAddress(event.target['email'].value))
        setCustomValidity('Email niepoprawny!', 'email')

    if(!checkLength(event.target['password'].value, 6))
        setCustomValidity('Hasło za krótkie!', 'password')

    if(!checkPasswords(event.target['password'].value, event.target['password2'].value))
        setCustomValidity('Hasło niezgodne!', 'password2')

    if(isSuccessful){
        event.target['name'].value = ""
        event.target['email'].value = ""
        event.target['password'].value = ""
        event.target['password2'].value = ""
    }
}

function checkLength(value, length){
    if(value.length < length) return false
    return true
}

function checkPasswords(password1, password2){
    if(password1 === password2) return true
    return false
}


function setCustomValidity(message, name_element) {
    spanError(name_element, message)
    isSuccessful = false;
}

function spanError(nameOfElement, message){
    let element = document.querySelector("[name=" + nameOfElement +"] + span.error");
    element.innerHTML = message;
}

function isEmailAddress(text){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text)) return true;
    return false;
}
let password2 = document.getElementById('password2');

function save(){
let name = document.getElementById("name1").value;
let table = document.getElementById("table");

let newRow = table.insertRow();
//create cells
let nameCell = newRow.insertCell();
let lastnameCell = newRow.insertCell();
nameCell.textContent = name;
lastnameCell.textContent = lastname;
}