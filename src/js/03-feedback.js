import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector("input"),
    textArea: document.querySelector(".feedback-form textarea"),
}

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit)
window.addEventListener('load', onPageReload)
let formData = {};

function onFormInput(evt) {

    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onPageReload(evt) {

    const savedUserData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (savedUserData) {
    
        refs.textArea.value = savedUserData.message;
        refs.email.value = savedUserData.email;
        formData.email = refs.email.value;
        formData.message = refs.textArea.value;
  }
} 
function onFormSubmit(evt) {

    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}