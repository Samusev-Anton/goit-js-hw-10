const returnedCountries = debounce(function countriesName(evt) {
    // console.log(evt.currentTarget.value);
    inputName = evt.currentTarget.value;
    callFetch();
}, 300);


inputData.addEventListener('input', returnedCountries);
