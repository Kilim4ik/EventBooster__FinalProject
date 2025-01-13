import countryMapping from '../json/countryCodes.json';
import { getEventsByName } from './fetch-events-data-with-key.js';
import { renderEvents } from './renderEvents.js';
function createModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => closeModal(modal));
    const title = document.createElement('h2');
    title.textContent = 'Не знайдено країну';
    const message = document.createElement('p');
    message.textContent = 'Код для вибраної країни не знайдено. Спробуйте ще раз.';
    modalContent.appendChild(closeButton);
    modalContent.appendChild(title);
    modalContent.appendChild(message);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    return modal;
}

function openModal(modal) {
    modal.style.display = 'block';
}
function closeModal(modal) {
    modal.style.display = 'none';
}
const searchCountrySelector = document.querySelector("#options")
searchCountrySelector.addEventListener('input', async (event) => {
    const selectedCountry = event.target.value;
    const countryCode = countryMapping[selectedCountry];
    if (countryCode) {
        try {
            const events = await getEventsByName(0, `country:${countryCode}`);
            renderEvents(events);
        } catch (error) {
            console.error('Помилка при отриманні подій:', error);
        }
    } else {
        console.error('Код країни не знайдено для вибраної країни.');
        const modal = createModal();
        openModal(modal);
    }
});
