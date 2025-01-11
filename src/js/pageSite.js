const pagination = document.getElementById('pagination');
const eventsContainer = document.getElementById('events-container');
let totalPages = 1;
let currentPage = 1;
const itemsPerPage = 10;

import { getEventsByName } from './fetch-events-data-with-key.js';

async function fetchEvents() {
  try {
    const events = await getEventsByName(1, '');
    totalPages = Math.ceil(events.length / itemsPerPage);

    renderEvents(events.slice(0, itemsPerPage));
    renderPagination(events);
  } catch (error) {
    console.error('Error fetching events:', error);
  }
}


import { renderEvents } from './renderEvents.js';

function renderPagination(events) {
  pagination.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      createPageButton(i, events);
    } else if (
      (i === currentPage - 2 || i === currentPage + 2) &&
      !pagination.lastChild.textContent.includes('...')
    ) {
      const dots = document.createElement('span');
      dots.textContent = '...';
      pagination.appendChild(dots);
    }
  }
}

function createPageButton(page, events) {
  const button = document.createElement('button');
  button.textContent = page;
  button.className = 'page-btn';
  button.dataset.page = page;

  if (page === currentPage) {
    button.classList.add('active');
  }

  button.addEventListener('click', () => {
    currentPage = page;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    renderEvents(events.slice(startIndex, endIndex));
    renderPagination(events);
  });

  pagination.appendChild(button);
}

fetchEvents();
