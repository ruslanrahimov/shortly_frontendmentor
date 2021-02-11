const header = document.querySelector('.header');
const toggle = document.querySelector('.toggle');

const menuToUp = () => { // menu to up animation by anime.js lib
    return anime({
        targets: '.toggle-menu',
        translateY: -500
    });
}

const menuToDown = () => {  // menu to down animation by anime.js lib
    return anime({
        targets: '.toggle-menu',
        translateY: 0,
    });
}


toggle.addEventListener('click', () => { //burger menu

    if (header.classList.contains('open')) {
        header.classList.remove('open')
        menuToUp()
    } else {
        header.classList.add('open')
        menuToDown()
    }
});








