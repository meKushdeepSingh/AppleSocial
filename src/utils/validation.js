import { regexStrings, validationStings } from "./strings";


const validation = {
    required: {
        required: {
            value: true,
            message: validationStings.required
        }
    },
    firstName: {
        required: {
            value: true,
            message: validationStings.required,
        },
        maxLength: {
            value: 15,
            message: validationStings.firstNameMax,
        },
        pattern: {
            value: regexStrings.alphbetRegex,
            message: validationStings.alphabetOnly
        }
    },
    lastName: {
        required: {
            value: true,
            message: validationStings.required,
        },
        maxLength: {
            value: 15,
            message: validationStings.lastNameMax,
        },
        pattern: {
            value: regexStrings.alphbetRegex,
            message: validationStings.alphabetOnly
        }
    },
    email: {
        required: {
            value: true,
            message: validationStings.required,
        },
        pattern: {
            value: regexStrings.emailRegex,
            message: validationStings.validEmail,
        }
    },
    phone: {
        required: {
            value: true,
            message: validationStings.required
        },
        pattern: {
            value: regexStrings.phoneRegex,
            message: validationStings.validPhone
        }
    },
    password: {
        required: {
            value: true, message: validationStings.required,
        },
        maxLength: { value: 8, message: validationStings.passwordMax },
        minLength: { value: 3, message: validationStings.passwordMin },
    },
    confirmPassword: (currentPassword) => ({
        required: { value: true, message: validationStings.required },
        validate: value => value === currentPassword || validationStings.passwordMismatch
    })
}

export default validation;