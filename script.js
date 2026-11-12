var hamburger = document.querySelector('.hamburger-icon')
var cross = document.querySelector('.cross-icon')
var navList = document.querySelector('.ul1')

function mobileButtonClick() {

    navList.classList.toggle('show');

    if (navList.classList.contains('show')) {
        hamburger.style.display = 'none';
        cross.style.display = 'block';
    }
    else {
        hamburger.style.display = 'block';
        cross.style.display = 'none';
    }

}
