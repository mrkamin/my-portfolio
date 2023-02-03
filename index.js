const newHumberger = document.getElementById('humberger');
const newNavList = document.getElementById('menu__list');

newHumberger.addEventListener('click', (e) => {
    newHumberger.classList.toggle('active');
    newNavList.classList.toggle('active');
})