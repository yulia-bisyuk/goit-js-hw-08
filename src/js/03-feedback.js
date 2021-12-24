import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
window.addEventListener('load', onPageReload);

function onFormInput(evt) {
    const dataOnInput = {
        email: form.email.value,
        message: form.message.value,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataOnInput));
    
}
function onPageReload(evt) {

    const savedUserData = localStorage.getItem(STORAGE_KEY);

    if (savedUserData !== null) {
    
        form.elements.message.value = JSON.parse(savedUserData).message;
        form.elements.email.value = JSON.parse(savedUserData).email; 
  }
   
} 

function onFormSubmit(evt) {
    evt.preventDefault();

    const userData = {
        email: evt.currentTarget.elements.email.value,
        message: evt.currentTarget.elements.message.value,
    };
    
    if (!userData.email || !userData.message) {return alert('Please fulfill all inputs')
    } else { console.log(userData); }

    evt.currentTarget.reset();
    localStorage.clear();
    
}

