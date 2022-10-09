import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const inputData = document.querySelector('#search-box');
console.log(inputData);
let inputName = "";

inputData.addEventListener('input', countriesName)

function countriesName(evt) {
    console.log(evt.currentTarget.value);
    inputName = evt.currentTarget.value;
    callFetch();
}

function callFetch() {
    fetch(`https://restcountries.com/v2/name/${inputName}?fields=name,flag`)
    .then(responce => {
        return responce.json();
    })
    .then(countries => {
    console.log(countries);
    })
.catch (error => {
    console.log(error);
})
}
