// menu icon
const menuIcon = document.querySelector('.icon-menu');

// x button
const closeIcon = document.querySelector('.mobile-menu__close');

// container 
const container = document.querySelector('.container');

// mobile menu
const mobileMenu = document.querySelector('.mobile-menu');

//overlay on the container when mobile menu opened
const overlay = document.querySelector('.overlay');

// mobile menu a
const mobile_links = document.querySelectorAll('.mobile-menu__a');

menuIcon.addEventListener('click', () => {
    menuIcon.style.display = 'none';
    mobileMenu.style.display = 'block';

    overlay.style.display = 'block';
});

closeIcon.addEventListener('click',() => {
    menuIcon.style.display = '';
    mobileMenu.style.display = 'none';

    overlay.style.display = 'none';
});

mobile_links.forEach(link => {
    link.addEventListener('click',() => {
        menuIcon.style.display = '';
        mobileMenu.style.display = 'none';

        overlay.style.display = 'none';
    })
})