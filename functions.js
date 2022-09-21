// INPUT VALIDATION EFFECTS 

const firstName = document.getElementsByTagName('input')[0]
const lastName = document.getElementsByTagName('input')[1]
const eMail = document.getElementsByTagName('input')[2]
const red = 'rgb(255, 0, 0)'
const green = 'rgb(0, 128, 0)'

// wrong input functions

let addShake = (object) => {
   object.classList.add('shake')
}

let removeShake = (object) => {
    object.classList.remove('shake')
}

// correct input functions

let textGreen = (object) => {
    object.style.color = green
}

window.onclick = (event) => {
    const firstNameBorderColor = window.getComputedStyle(firstName).borderColor
    const lastNameBorderColor = window.getComputedStyle(lastName).borderColor
    const eMailBorderColor = window.getComputedStyle(eMail).borderColor

    // wrong input effects

    if (event.target === firstName) {
        removeShake(firstName)
    } else {
        if (firstNameBorderColor === red) {
            addShake(firstName)
        }
    }

    if (event.target === lastName) {
        removeShake(lastName)
    } else {
        if (lastNameBorderColor === red) addShake(lastName)
    }


    if (event.target === eMail) {
        removeShake(eMail)
        eMail.style.color = 'black'
    } else {
        if (eMailBorderColor === red) {
            addShake(eMail)
            eMail.style.color = 'red'
        } else {
            eMail.style.color = 'black'
        }
    }
}