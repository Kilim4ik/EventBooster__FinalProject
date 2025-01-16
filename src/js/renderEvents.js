export const renderEvents = async arr => {
  document.querySelector('body').innerHTML =
    arr
      .map(
        elem => `
  <div class="event-card">
  <img src="${elem.images[9].url}" alt="${elem.name} poster" class="event-card__image">
  <h3 class="event-card__title">${elem.name}</h3>
  <p class="event-card__date">${elem.dates.start.localDate}</p>
  <p class="event-card__location">${elem['_embedded'].venues[0].name}</p>
</div>`
      )
      .join(',') ;
};
