const URL =
  'https://proxy.cors.sh/https://app.ticketmaster.com/discovery/v2/events.json?apikey=QcV4xVHAyk410RrmWruoaQyfKz244DeP';
export const getEventsByName = (page, str) => {
  return fetch(`${URL}&keyword=${str}&page=${page}`)
    .then(res => res.json())
    .then(data => data['_embedded'].events);
};
