async function loadEvent() {
  const rootElement = document.getElementById("root");
  
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();
  
  //console.log(countries);
  
  for (const country of countries) {
    //console.log(country.name.official);
    const countryHTML = `
          <section class="independent">
          <img src="${country.flags.png}" alt="flag">
          <h1>${country.name.official}</h1>
          <h2>${country.capital}</h2>
       
          </section>
      `;
    rootElement.insertAdjacentHTML('beforeend', countryHTML);
  }
  

  /*const peruO = peru[0];
  console.log(peruO);

  var peruLand = ``;
  if (peruO.landlocked == true) {
    var peruLand = `
    <h5>I've never met the see</h5>
`;
  }

  console.log(rootElement);
  //console.log(peruLand);
  
  rootElement.insertAdjacentHTML('beforeend', peruLand);*/
}

window.addEventListener("load", loadEvent);