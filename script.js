async function loadEvent() {
  const rootElement = document.getElementById("root");
  
  const res = await fetch("https://restcountries.com/v3.1/name/peru");
  const peru = await res.json();
  console.log(peru);
  
  const peruO = peru[0];
  console.log(peruO);

  const peruHTML = `
        <section class="independent">
        <img src="${peruO.flags.png}" alt="flag">
        <h1>${peruO.name.official}</h1>
        <h2>${peruO.capital[0]}</h2>
        <ul>
            <li>First language</li>
        </ul>
      
        </section>
    `;
  var peruLand = ``;
  if (peruO.landlocked == true) {
    var peruLand = `
    <h5>I've never met the see</h5>
`;
  }

  console.log(rootElement);
  //console.log(peruLand);
  
  rootElement.insertAdjacentHTML('beforeend', peruHTML);
  rootElement.insertAdjacentHTML('beforeend', peruLand);
}

window.addEventListener("load", loadEvent);