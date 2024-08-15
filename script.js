document.addEventListener('DOMContentLoaded', function(){
    const switchTheme = document.querySelector('#themeSwitch')
    switchTheme.addEventListener('click', ()=>{
        document.documentElement.classList.toggle("dark")
        switchTheme.classList.toggle('btn-warning')
        switchTheme.classList.toggle('btn-danger')
    })

    function validateField(field, fieldName, errorLabel){
        const error = document.getElementById(errorLabel)
        error.textContent = ``
    
        if(field.type === `text`){
            if(!field.value){
                error.textContent = `${fieldName} cannot be Blank!`
                return false;
            } else if(!isNaN(field.value)){
                error.textContent = `${fieldName} cannot be a Number!`
                return false
            }
        } else if(field.type ===`date`){
            if(!field.value){
                error.textContent = `${fieldName} cannot be Blank!`
                return false;
            }
        } else if(field.type ===`email`){
            if (!validateEmail(field.value)) {
                error.textContent = `${fieldName} Format is Incorrect!`
                return false
            }
        } else if(field.type ===`number`){
            if(!validatePhone(field.value)){
                error.textContent = `${fieldName} Enter a Valid Phone Number!`
                return false
            }
        }
        return true
    }
    
    function validateform() {
        const fname = document.getElementById('fname')
        const bday = document.getElementById('bday')
        const email = document.getElementById('email')
        const phone = document.getElementById('phone')
    
        const fnameValid = validateField(fname, `first name`, `fnameError`)
        const bdayValid = validateField(bday, `Date`, `dateError`)
        const emailValid = validateField(email, `Email`, `emailError`)
        const phoneValid = validateField(phone, `Phone`, `phoneError`)
  
        return fnameValid && bdayValid && emailValid && phoneValid
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    
    function validatePhone(num) {
        var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        return re.test(num);
    }

    document.getElementById('sigupForm').addEventListener('submit', function(e){
        e.preventDefault()
    
        if(validateform()){
            document.getElementById('sigupForm').style.display = `none`
            document.getElementById('success').style.display = `inline-block`
        }
    })
    
})
