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
        firstName.style.color = 'black'
    } else {
        if (firstNameBorderColor === red) {
            addShake(firstName)
        } else if (firstNameBorderColor === green) {
            firstName.style.color = green
        }
    }

    if (event.target === lastName) {
        removeShake(lastName)
        lastName.style.color = 'black'
    } else {
        if (lastNameBorderColor === red) {
            addShake(lastName)
        } else if (lastNameBorderColor === green) {
            lastName.style.color = 'green'
        }
    }


    if (event.target === eMail) {
        removeShake(eMail)
        eMail.style.color = 'black'
    } else {
        if (eMailBorderColor === red) {
            addShake(eMail)
            eMail.style.color = 'red'
        } else if (eMailBorderColor === green) {
            eMail.style.color = 'green'
        }
    }
}

// MESSAGE AFTER SIGN UP BUTTON IS CLICKED

const signUpForm = document.getElementsByTagName('form')[0]

signUpForm.addEventListener('submit', () => {
    alert('Thank you for signing up!')
})