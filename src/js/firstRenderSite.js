'use strict';
import { renderEvents } from './renderEvents.js';
let data = new Date();
data = data.toISOString();
fetch(
  `https://app.ticketmaster.com/discovery/v2/events.json?apikey=QcV4xVHAyk410RrmWruoaQyfKz244DeP&startDateTime=${data.slice(
    0,
    data.length - 5
  )}Z&sort=date,asc`
)
  .then(res => res.json())
  .then(data => {
    renderEvents(data['_embedded'].events);
  });
