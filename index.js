const form = document.getElementById('form');
const Contact = document.getElementById('Contact');
const SKYPE = document.getElementById('SKYPE');
const email = document.getElementById('email');
var Region = document.getElementById('Region');

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
    var Region = Region.value.trim();

    
  if(RegionValue === '1') {
        setError (Region , 'please select');
    } else {
       setSuccess(Region);
    }

  if(SKYPEValue === '') {
        setError(SKYPE, 'SKYPE ID is required');
    } else if (SKYPEValue..={5,20]/) {
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

else setSuccess(submit);

};
