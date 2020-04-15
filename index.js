let firstName;
let lastName;
let age = 44;
let lightOn = true

function lightSwitch () {

    if (lightOn == true) {
        lightOn = false
        console.log(lightOn)
    }
    else {
        lightOn = true
        console.log(lightOn)
    }
}

lightSwitch ()
lightSwitch()
lightSwitch()

let numberOne;
let numberTwo;
let total;

function addition (numberOne, numberTwo) {
    total = numberOne + numberTwo
    console.log(total)
}

addition(20,30)
addition(173,47)
addition(179,21)