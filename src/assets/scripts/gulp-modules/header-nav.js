$(document).ready(function(){
    $("body").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

function menuOpen(menu) {
  menu.forEach(el => {
    menuOpenAnim();
    document.querySelector('body').style.overflow = 'hidden';
  });
}

function menuClose(menu) {
  menu.forEach(el => {
    menuCloseAnim();
    document.querySelector('body').style.overflow = 'auto';
  });
}

function menuOpenAnim(evt, reverseArg) {
  const menu = document.querySelectorAll('[data-menu]');
  const tl = gsap.timeline({ paused: true });
  tl.add(() => {
    menu.forEach(el => {
      el.classList.add('active');
    });
  });
  tl.fromTo(menu, {autoAlpha: 0},
    {autoAlpha: 1,  ease: 'power4.easeInOut', duration: 0.4 }, '<');
  tl.play();
}

function menuCloseAnim(evt, reverseArg) {
  const menu = document.querySelector('[data-menu]');
  const tl = gsap.timeline({ paused: true });
  tl.fromTo(menu, {autoAlpha: 1},
    { ease: 'power4.easeInOut', duration: 0.2, autoAlpha: 0 }, '<');
  tl.add(() => {
    menu.classList.remove('active');
  });
  tl.play();
}

function menuInit() {
  const menu = document.querySelectorAll('[data-menu]');
  document.querySelectorAll('[data-open-menu]').forEach(elem => {
    elem.addEventListener('click', () => menuOpen(menu));
  });
  document.querySelectorAll('[data-close-menu]').forEach(elem => {
    elem.addEventListener('click', () => menuClose(menu));
  });
  document.querySelector('.js-menu-main').addEventListener('click', ({ target }) => {
    if (target.tagName === 'a') {
      return;
    }
    document.querySelector('[data-close-menu]').click();
  });
}


function init() {
  menuInit();
}

window.addEventListener('DOMContentLoaded', init);
