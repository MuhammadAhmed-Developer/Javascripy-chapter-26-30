// clear buttons
function clear2() {
    document.getElementById('output').innerHTML = ''
}
function clearInput() {
    document.getElementById('inputName').value = ''
}

//    / console.log(Math.round(10.50293))
// console.log(Math.floor(-10.100))
// console.log(Math.ceil(-10.59293))
// console.log(Math.random(10.50293))





// round number
function roundNumber() {
    let number1 = document.getElementById('inputName').value;
    if (!number1) {
        // alert('Please Enter a number!')
        Toastify({
            text: "Please Enter a number!                     .",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },

        }).showToast();
        return;
        return
    }
    document.getElementById('output').innerHTML = Math.round(number1)


}


// ciel
function cielNumber() {
    let number1 = document.getElementById('inputName').value;
    if (!number1) {
        // alert('Please Enter a number!')
        Toastify({
            text: "Please Enter a number!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },

        }).showToast();
        return;
        return
    }
    document.getElementById('output').innerHTML = Math.ceil(number1)
}

// floor a number
function floorNumber() {
    let number1 = document.getElementById('inputName').value;
    if (!number1) {
        // alert('Please Enter a number!')

        Toastify({
            text: "Please Enter a number!",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },

        }).showToast();
        return;
    }

    document.getElementById('output').innerHTML = Math.floor(number1)
}

// randomnumber

function randomNumber() {
    let number1 = document.getElementById('inputName').value;
    // if(!number1){
    //     alert('Please Enter a number!')
    //     return
    // }
    document.getElementById('output').innerHTML = Math.random(number1)
}

// dise a number

function diceNumber() {
    let dicenum = Math.random()
    dicenum = (dicenum * 6) + 1

    let floorNum = Math.floor(dicenum);
    let html = '<h1>' + floorNum + '</h1></br>Ludo Button😁'
    document.getElementById('output').innerHTML = html

}

// inputvalue get
function inputValue() {
    return document.getElementById('inputName').value
}


// passward generate

function generatePassward() {
    // let length = inputValue();

    let randomString = ''
    let upperCaseAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lowerCaseAlphabets = 'abcdefghujklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let symbols = '¬@£$%^&*+_-><?:#@'
    let possiblestring = upperCaseAlphabets + lowerCaseAlphabets + numbers + symbols;
    // console.log(possiblestring.length)

    let limit = 16
    for (let i = 0; i < limit; i++) {
        let randomNumber = Math.random();
        // console.log(randomNumber * 80);
        randomString += possiblestring.charAt(Math.floor(randomNumber * possiblestring.length));
    }
    // console.log(randomString)
    document.getElementById('output').innerHTML = '<h6>' + randomString + '</h6>'


}