const pagination = document.getElementById("pagination");

const totalPages = 29;
let currentPage = 1;

function renderPagination() {
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      createPageButton(i);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      const dots = document.createElement("span");
      dots.textContent = "...";
      dots.style.margin = "0 5px";
      pagination.appendChild(dots);
    }
  }
}

function createPageButton(page) {
  const button = document.createElement("button");
  button.textContent = page;
  button.className = "page-btn";
  button.dataset.page = page;

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", () => {
    currentPage = page;
    renderPagination();
  });

  pagination.appendChild(button);
}

renderPagination();