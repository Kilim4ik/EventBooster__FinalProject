const modal = document.querySelector('.modal');
export const initializeModal = (selector) => {
    if (!modal) {
        const modalHTML = `
          <div class="modal" xyz="down-0 duration-10 wide-2 flip-right-4 flip-down-1 ease-linear left-1">
          <div class="modal-overlay xyz-in"></div>
          </div>
        `;
   

        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    const modalOverlay = document.querySelector('.modal-overlay');
    const cards = document.querySelectorAll(selector);
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            modal.classList.add('active');
            modalOverlay.classList.add('active');
        });
    })}

    
//initializeModal('.card');
