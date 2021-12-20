import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector(".feedback-form"),
    email: document.querySelector("input"),
    textArea: document.querySelector(".feedback-form textarea"),
    submitBtn: document.querySelector(".feedback-form button"),
}

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit)
window.addEventListener('load', onPageReload)
const formData = {};

function onFormInput(evt) {
    
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onPageReload(evt) {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    // console.log(savedMessage);

    if (savedMessage) {
        const obj = JSON.parse(savedMessage);
       
        refs.textArea.value = obj.message;
        refs.email.value = obj.email;
    // console.log(obj);
  }
} 
function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
    

}