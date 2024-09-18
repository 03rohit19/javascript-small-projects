const countryName = new URLSearchParams(location.search).get("name");
const flagImage = document.querySelector(".country-details img");
const countryNameH1 = document.querySelector(".country-details h1");
const nativeName = document.querySelector(".native-name");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    flagImage.src = country.flags.svg;
    countryNameH1.innerText = country.name.common;

    if (country.name.nativeName) {
      nativeName.innerText = Object.values(country.name.nativeName)
        .map((lang) => lang.common) // Displaying the common native name
        .join(", ");
    } else {
      nativeName.innerText = country.name.common;
    }
  })
  .catch((err) => {
    console.error("Error fetching country data:", err);
    nativeName.innerText = "Country data not found";
  });
