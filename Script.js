const hamMenu = document.querySelector('.Menu-icon');

const offScreenMenu = document.querySelector('.Navigation-bar')

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('#Menu-icon');
    offScreenMenu.classList.toggle('active');
})