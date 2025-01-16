import { fetchEvents } from './fetch-events-data-with-key.js';
import { renderEvents } from './renderEvents.js';
const searchEventButton = document.getElementById('buttonEventCountries');
const searchInput = document.getElementById('searchInputCountries');
searchEventButton.addEventListener('click', function () {
  const searchValue = searchInput.value.trim().toLowerCase();
  let currentPage = 1;
  if (searchValue) {
    fetchEvents({ page: currentPage, keyword: searchValue, locale: undefined })
      .then(events => {
        renderEvents(events);
      })
      .catch(error => console.error('Error loading events:', error));
  }
});
