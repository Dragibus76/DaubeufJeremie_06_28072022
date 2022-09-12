//******************* IMPORTS ********************/
import { photographerFactory } from "../factories/photographer.js";

//******************* FETCH ********************/
async function getPhotographers() {
  // fetch data 
  const data = await fetch("./data/photographers.json");
  // result
  const result = await data.json();
  return {
    photographers: result.photographers,
  };
}

//******************* DISPLAY FUNCTION ********************/
async function displayData(photographers) {
  // select photographers section
  const photographersSection = document.querySelector(".photographer_section");
  // for each photographer
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    // append element
    photographersSection.appendChild(userCardDOM);
  });
}

//******************* GET DATA ********************/
async function init() {
  //  get data
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();