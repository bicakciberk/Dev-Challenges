const button = document.querySelector('.continue');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const userName = document.querySelector('#name');
const adress = document.querySelector('#adress');
const city = document.querySelector('#city');
const postalCode = document.querySelector('#postal-code');

function error(input, message) {
    let div = input.nextElementSibling;
    div.textContent = message;
    div.style.color = 'red';
    div.style.fontSize = '14px';
    div.style.margin = '10px;'
    input.style.border = '1px solid red';;

}

function success(input) {
    input.classList = 'success';
}

function checkReq(input) {
    if (input.value === '') {
        error(input, `${input.id} is should not be empty`);
    } else {
        success(input);
    }
}

function checkLength(input, number) {
    if (input.value.length != number) {
        error(input, `${input.id} should maximum 10 characters`);
    }
    else {
        success(input);
    }
}

const checkEmail = (input) => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, 'Please enter a correct email address');
    }
};

button.addEventListener('click', function () {
    checkEmail(email);
    checkReq(email);
    checkReq(phone);
    checkReq(userName);
    checkReq(adress);
    checkReq(city);
    checkReq(postalCode);
    checkLength(phone, 10);
});

