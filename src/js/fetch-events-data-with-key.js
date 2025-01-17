const URL =
  'https://proxy.cors.sh/https://app.ticketmaster.com/discovery/v2/events.json?';
//! Приклад обʼєкту для fetchEvents()
//   const obj = {
//     page: 0,
//     keyword: undefined,
//     locale: 'fr-be',
//   };
export const fetchEvents = ({ page, keyword, locale }) => {
  const params = new URLSearchParams(
    Object.entries({
      apikey: 'QcV4xVHAyk410RrmWruoaQyfKz244DeP',
      page,
      keyword,
      locale,
    }).filter(([key, value]) => value != undefined)
  );

  console.log(params.toString());
  return fetch(`${URL}${params.toString()}`)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => data['_embedded'].events);
};
