const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const container = document.querySelector('.container');

btnOpen.addEventListener('click', () => {
    container.classList.add('show-nav');
});

btnClose.addEventListener('click', () => {
    container.classList.remove('show-nav');
});