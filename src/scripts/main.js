console.log(businesses)
//business Name, state, city, zipcode,





// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
    console.log(business.addressStateCode)
    let inNewYork = false

    if (business.addressStateCode === "NY") {
        inNewYork = true
    }

    return inNewYork
})
const manufacturingBusinesses = businesses.filter(business => business.companyIndustry === "Manufacturing")
//   console.log(newYorkBusinesses)
const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Active Businesses</h1>"
let zipCodeProperty = "addressZipCode"
manufacturingBusinesses.forEach(business => {
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




