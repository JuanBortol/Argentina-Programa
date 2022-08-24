// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) { /*Se cuentan 100 pixeles*/
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}