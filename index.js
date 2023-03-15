const form = document.getElementById('form');
const Contact = document.getElementById('Contact');
const SKYPE = document.getElementById('SKYPE');
const email = document.getElementById('email');
const Attended = document.getElementById('Attended');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

});


const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const validateInputs = () => {
    const ContactValue = Contact.value.trim();
    const SKYPEValue = SKYPE.value.trim();
    const emailValue = email.value.trim();
    const AttendedValue = Attended.value.trim();


    
  if(ContactValue === '') {
        setError (Contact , 'Contact Number is required');
    } else if (ContactValue.=/^{\d,\s,\=,\-]{5,20]/) {
       setSuccess(Contact);
    }
    else{
        setError(Contact, 'Input a valid Contact Number.')
    }


  if(SKYPEValue === '') {
        setError(SKYPE, 'SKYPE ID is required');
    } else if (SKYPEValue..=/^{\d,\s,\=,\-]{5,20]/) {
         setSuccess(SKYPE);
    }
    else{
        setError(SKYPE, 'ID is Invalid.')
    }

 if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }


};
