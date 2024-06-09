const fName = document.getElementById("fname");
const fNameError = document.getElementById("fNameError");

const lName = document.getElementById("lname");
const lNameError = document.getElementById("lNameError");

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const emailValidityError = document.getElementById("emailValidityError");

const radio1 = document.getElementById("enquiry");
const radio2 = document.getElementById("request");
const radio2Error = document.getElementById("radio2Error");

const message = document.getElementById("message");
const msgError = document.getElementById("msgError");

const checkbox = document.getElementById("checkbox");
const chkError = document.getElementById("chkError");

const successMsg = document.getElementById("success");

const submitButton = document.getElementById("subBtn");



submitButton.addEventListener('click', () => {
    event.preventDefault();
    let valid = true;
    const emailvl = email.value;

    if (!fName.value) {
        fNameError.style.display = "block";
        valid = false;
    } else {
        fNameError.style.display = "none";
    }

    // Check last name field
    if (!lName.value) {
        lNameError.classList.add('hide2');
        lNameError.classList.remove('hide');
        valid = false;
    } else {
        lNameError.style.display = "none";
    }

    // Check email field

    if (!email.value) {
        emailError.classList.remove('hide');
        emailError.classList.add('hide2');
        valid = false;
    } else if (!validateEmail(emailvl)) {
        emailValidityError.classList.remove('hide');
        emailValidityError.classList.add('hide2');
        valid = false;
    } else {
        emailError.classList.add('hide');
        emailValidityError.classList.add('hide');
    }


    // check query type

    if (!radio1.checked && !radio2.checked) {
        radio2Error.classList.add('hide2');
        radio2Error.classList.remove('hide');
        valid = false;
    } else {
        radio2Error.style.display = "none";
    }


    // Check message field
    if (!message.value) {
        msgError.classList.add('hide2');
        msgError.classList.remove('hide');
        valid = false;
    } else {
        msgError.style.display = "none";
    }


    // check checkboxe

    if (!checkbox.checked) {
        chkError.classList.add('hide2');
        chkError.classList.remove('hide');
        valid = false;
    } else {
        chkError.classList.add('hide');
    }


    if (valid) {
        successMsg.style.visibility = "visible";
        successMsg.classList.remove('hide');
        
        resetForms();
    } else {
        successMsg.style.visibility = "hidden";
        successMsg.classList.add('hide');
    }

    
});


function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
};

function resetForms(){
    fName.value = '';
    lName.value = '';
    email.value = '';
    radio1.checked = false;
    radio2.checked = false;
    message.value = '';
    checkbox.checked = false;
};