document.addEventListener('DOMContentLoaded', function(){
    function toggleTheme(){
        document.documentElement.classList.toggle("dark")
        switchThemeButton.classList.toggle('btn-warning')
        switchThemeButton.classList.toggle('btn-danger')
    }

    function validateField(field, fieldName, errorLabelId) {
        const errorLabel = document.getElementById(errorLabelId)
        errorLabel.textContent = ''

        const validationMap = {
            'text': validateTextField,
            'date': validateDateField,
            'email': validateEmailField,
            'number': validatePhoneField
        };

        const validationFn = validationMap[field.type]
        return validationFn(field, fieldName, errorLabel)
    }

    function validateTextField(field, fieldName, errorLabel) {
        if (!field.value) {
            errorLabel.textContent = `${fieldName} cannot be blank!`
            return false
        }
        if (!isNaN(field.value)) {
            errorLabel.textContent = `${fieldName} cannot be a number!`
            return false
        }
        return true
    }

    function validateDateField(field, fieldName, errorLabel) {
        if (!field.value) {
            errorLabel.textContent = `${fieldName} cannot be blank!`
            return false
        }
        return true
    }

    function validateEmailField(field, fieldName, errorLabel) {
        if (!validateEmail(field.value)) {
            errorLabel.textContent = `${fieldName} format is incorrect!`
            return false
        }
        return true
    }

    function validatePhoneField(field, fieldName, errorLabel) {
        if (!validatePhone(field.value)) {
            errorLabel.textContent = `${fieldName} must be a valid phone number!`
            return false
        }
        return true
    }

    function validateEmail(email) {
        const emailPattern = /\S+@\S+\.\S+/
        return emailPattern.test(email)
    }

    function validatePhone(phone) {
        const phonePattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
        return phonePattern.test(phone)
    }
    
    function validateform() {

        const formInputs = {
            fname : document.getElementById('fname'),
            bday : document.getElementById('bday'),
            email : document.getElementById('email'),
            phone : document.getElementById('phone')
        }

        const validations = [
            validateField(formInputs.fname, `first name`, `fnameError`),
            validateField(formInputs.bday, `Date`, `dateError`),
            validateField(formInputs.email, `Email`, `emailError`),
            validateField(formInputs.phone, `Phone`, `phoneError`)
        ]
  
        return validations.every(Boolean);
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/
        return re.test(email)
    }
    
    function validatePhone(num) {
        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
        return re.test(num)
    }
    
    function handleFormSubmit(e){
        e.preventDefault()
    
        if(validateform()){
            displaySuccessMessage()
        }
    }

    function displaySuccessMessage() {
        signupForm.style.display = 'none'
        successMessage.style.display = 'inline-block'
    }

    const switchThemeButton = document.querySelector('#themeSwitch')
    const signupForm = document.getElementById('sigupForm')
    const successMessage = document.getElementById('success')

    switchThemeButton.addEventListener('click', toggleTheme)
    signupForm.addEventListener('submit', handleFormSubmit)
})
