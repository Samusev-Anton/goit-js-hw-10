import Notiflix from 'notiflix';
import { inputName } from "./index";



const insertBox = document.querySelector('.country-list')
function callFetch() {
    let markUp = '';
    if (inputName === '') {
        removeAllChildNodes(insertBox);
        return
    }
    fetch(`https://restcountries.com/v2/name/${inputName}?fields=name,flag,capital,population,languages `)
        

        .then(responce => {
            if (!responce.ok) {
                throw new Error()
            }
        return responce.json();
    })
        .then(countries => {
            console.log(countries);
        if (countries.length === undefined) {
        removeAllChildNodes(insertBox);
        } else if (countries.length === 1) {
                    removeAllChildNodes(insertBox);
            markUp = countries.map(({ name, flag, capital, population, languages }) => {
                // console.log(languages);
                const languagesName = Object.values(languages);
                let lang = ""
                languagesName.forEach(language => {
                    lang += language.name;
                }).join(', ');
                // console.log(languagesName);
        return `
  <img class="gallery__image" src="${flag}" alt="${name}" />
  <p>${name} </p>
  <p>${capital} </p>
  <p>${population} </p>
    <p>${lang} </p>` }).join('');
        } else if (countries.length > 10) {
            removeAllChildNodes(insertBox);
            Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        } else {
            removeAllChildNodes(insertBox);
             markUp =  countries.map(({ name, flag }) => {
        return `
  <img class="gallery__image" src="${flag}" alt="${name}" />
  <p>${name} </p>`

    }).join('');
//    console.log(inputName);
 }
        insertBox.insertAdjacentHTML('beforeend', markUp);
    })
        .catch(onFetcherror)
}

function onFetcherror(error) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
}


function removeAllChildNodes(insertBox) {
    while (insertBox.firstChild) {
        insertBox.removeChild(insertBox.firstChild);
    }
}

export { callFetch };