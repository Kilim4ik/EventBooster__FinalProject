import { getEventsByName } from "./fetch-events-data-with-key.js";
import { renderEvents } from "./renderEvents.js";
const searchCountriesButton = document.getElementById("buttonCountries")
const searchInput = document.getElementById("searchInputCountries");
searchCountriesButton.addEventListener('click',function(){
    const searchValue = searchInput.value.trim().toLowerCase();
    let currentPage = 1;
    if(searchValue){
        getEventsByName(currentPage, searchValue)
        .then(events => {
            renderEvents(events); 
          })
          .catch(error => console.error('Error loading events:', error));
    }
})
