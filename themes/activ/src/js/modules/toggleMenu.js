const toggleMenu = () => {
    const navigation = document.querySelector('.navigation');
    const openBtn = document.querySelector('.navigation__open');
    const coverElem = document.querySelector('.navigation__cover');
    const closeBtn = document.querySelector('.navigation__panel-close');
    const links = navigation.querySelectorAll('.navigation__panel-link');

    const openMenu = () => {
        navigation.classList.add('_active');
    }

    const closeMenu = () => {
        navigation.classList.remove('_active');
    }

    openBtn.addEventListener('click', openMenu);
    coverElem.addEventListener('click', closeMenu);
    closeBtn.addEventListener('click', closeMenu);
    links.forEach(link => link.addEventListener('click', closeMenu));
}

export default toggleMenu;