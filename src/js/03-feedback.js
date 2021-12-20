// import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

refs = {
    form: document.querySelector(".feedback-form"),
    textArea: document.querySelector(".feedback-form textarea"),
    submitBtn: document.querySelector(".feedback-form button"),
}

refs.form.addEventListener('input', onFormInput);
const formData = {};

function onFormInput(evt) {
    
    // formData[evt.target.name] = evt.target.value;
    // console.log(formData);
    console.log(evt.target.name);
    console.log(evt.target.value);
}