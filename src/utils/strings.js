

export const validationStings = {
    firstNameMax: 'First name should be of atmost 15 characters.',
    lastNameMax: 'Last name should be of atmost 15 characters.',
    validEmail: 'Please enter a valid email.',
    required: 'This is required.',
    validPhone: 'Please enter a valid phone number.',
    passwordMax: 'Password should be of atmost 8 characters.',
    passwordMin: 'Password should be of atleast 3 characters.',
    passwordMismatch: 'The passwords do not match',
    alphabetOnly: 'Alphabets only.'
}

export const regexStrings = {
    emailRegex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phoneRegex: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
    alphbetRegex: /^[a-zA-Z\s]+$/,
}

export const messageStings = {

}

export const imageStings = {
    icName: require('../assets/images/id-card.png'),
    icEmail: require('../assets/images/email.png'),
    icPhone: require('../assets/images/phone-numbers-call.png'),
    icPassword: require('../assets/images/padlock.png'),
    icCross: require('../assets/images/close.png'),
    icSport: require('../assets/images/running.png'),
}