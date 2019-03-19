console.log(businesses)
//business Name, state, city, zipcode,

const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"
let zipCodeProperty = "addressZipCode"
businesses.forEach(business => {
    outEl.innerHTML += `
    <h2>${business.companyName}</h2>
    <section>
      ${business.addressFullStreet}
      <section>
      ${business.addressCity}  ${business["addressStateCode"]} 
      ${business[zipCodeProperty]}
       </section> 
      </section>  
  `
    outEl.innerHTML += "<hr/>"
});