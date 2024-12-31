import { getEventsByName } from "./fetch-events-data-with-key";
const searchCountriesButton = document.getElementById("buttonCountries")
const searchInput = document.getElementById("searchInputCountries");
searchCountriesButton.addEventListener('click',function(){
    const searchValue = searchInput.value.trim().toLowerCase();
    if(searchValue){
        getEventsByName(1, searchText);
    }
})
