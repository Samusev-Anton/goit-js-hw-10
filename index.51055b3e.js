const e=document.querySelector("#search-box");console.log(e);let o="";e.addEventListener("input",(function(e){console.log(e.currentTarget.value),o=e.currentTarget.value,fetch(`https://restcountries.com/v2/name/${o}?fields=name,flag`).then((e=>e.json())).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}));
//# sourceMappingURL=index.51055b3e.js.map
