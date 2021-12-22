import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector(".feedback-form"),
}

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);
window.addEventListener('load', onPageReload);

let formData = {};

function onFormInput(evt) {
    
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
}
function onPageReload(evt) {

    const savedUserData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedUserData) {
    
        refs.form.elements.message.value = savedUserData.message || null;
        refs.form.elements.email.value = savedUserData.email || null;
        
  }
} 
function onFormSubmit(evt) {

    const userData = {
        email: evt.currentTarget.elements.email.value,
        message: evt.currentTarget.elements.message.value
    }

    localStorage.removeItem(STORAGE_KEY);
    evt.preventDefault();
    evt.currentTarget.reset();
    
    if (userData.email === '' || userData.message === '') {return alert('Please fulfill all inputs')
    } else {console.log(userData);}
        
}

