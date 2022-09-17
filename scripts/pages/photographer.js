//Mettre le code JavaScript lié à la page photographer.html

import {
    displayPhotographer,
    displayPrice,
  } from "../utils/displayPhotographerPage.js";
  
 
  import { mediaFactory } from "../factories/mediaFactory.js";
  
  const url = new URL(window.location);
  const searchParams = new URLSearchParams(url.search);
  // get photographer id from url in number
  const photographerId = Number(searchParams.get("id"));
  const getPhotographInfo = () => {
    
    fetch("data/photographers.json")
      .then((res) => res.json())
      .then((json) => {
        const myPhotographer = json.photographers.find(function (photographer) {
          return photographer.id === photographerId;
        });
  
        // display price
        displayPrice(myPhotographer.price);
  
        // display photographer
        displayPhotographer(
          myPhotographer.name,
          myPhotographer.portrait,
          myPhotographer.city,
          myPhotographer.country,
          myPhotographer.tagline
        );
  
        // focus form inputs
        const formData = document.querySelectorAll(".formData");
        const firstName = document.getElementById("first");
        const lastName = document.getElementById("last");
        const eMail = document.getElementById("email");
  
        // MEDIAS
        const mediaPhotographer = json.media;
  
        // array of sorted media by photographer id
        let resultSortingMedia = [];
        for (let i = 0; i < mediaPhotographer.length; i++) {
          // if the current media's photographer id is equal to the current photographer id
          if (photographerId === mediaPhotographer[i].photographerId) {
            // push the current media to the array
            resultSortingMedia.push(mediaPhotographer[i]);
          }
        }
        for (let i = 0; i < resultSortingMedia.length; i++) {
          let newMedia = mediaFactory(
            resultSortingMedia[i],
            resultSortingMedia,
            photographerId
          );
  
          newMedia.display();
          resultSortingMedia[i] = newMedia;
        }
  
      });
  };
  getPhotographInfo();
  