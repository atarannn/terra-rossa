function formMobOpenAnim(evt, reverseArg) {
    const form = document.querySelector('.sideform');
    if  (form === null) return;
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(form, {autoAlpha: 0},
        { autoAlpha: 1, ease: 'power4.easeInOut', duration: 0.5, clearProps: 'all' }, '<');
    tl.play();
}

function formMobCloseAnim(evt, reverseArg) {
    const form = document.querySelectorAll('.sideform');
    if  (form === null) return;
    const ease = 'power4.easeOut';
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(form, { autoAlpha: 1},
        { ease: 'power4.easeInOut', duration: 0.5, autoAlpha: 0, delay: 0.1 }, '<');
    tl.add(() => {
        form.forEach(el => {
            el.classList.remove('sideform-active');
        })
    });
    tl.play();
}

const btnCallMobile = document.querySelectorAll('.js-mobile-call');
const btnCloseMobile = document.querySelector('.js-mobile-close');
const formMobile = document.querySelector('.sideform');
const formCallMobile = document.querySelector('.js-mobile-form');
const form = document.querySelector('[data-call-popup]');

formCallMobile.addEventListener('click', () => {
    document.querySelector('body').style.overflow = 'hidden';
    formOpenAnim();
    formMobCloseAnim();
});

btnCallMobile.forEach(btn => {
    btn.addEventListener('click', () => {
        formMobile.classList.add('sideform-active');
        formMobOpenAnim();
        document.querySelector('body').style.overflow = 'hidden';
    });
})

btnCloseMobile.addEventListener('click', () => {
    formMobCloseAnim();
    document.querySelector('body').style.overflow = 'auto';
});




function formOpen(form) {
    form.forEach(el => {
        formOpenAnim();
        document.querySelector('body').style.overflow = 'hidden';
    });
}

function formClose(form) {
    form.forEach(el => {
        formCloseAnim();
        document.querySelector('body').style.overflow = 'auto';
    });
}

function formOpenAnim(evt, reverseArg) {
    const form = document.querySelectorAll('[data-call-popup]');
    const formInfo = document.querySelector('.call-popup-info');
    const formClose = document.querySelector('.popup__close');
    const tl = gsap.timeline({ paused: true });
    tl.add(() => {
        form.forEach(el => {
            el.classList.add('active');
        });
    });
    tl.fromTo(form, {x: 0, autoAlpha: 0},
        { x: 0, autoAlpha: 1,  ease: 'power4.easeInOut', duration: 0.4, clearProps: 'all' }, '<');
    tl.fromTo(formInfo, {x: 3000},
        { x: 0, ease: 'power4.easeInOut', duration: 0.4, delay: 0.4, clearProps: 'all' }, '<');
    tl.fromTo(formClose, {y: -200},
        { y: 0, ease: 'power4.easeInOut', duration: 0.4, delay: 0.4, clearProps: 'all' }, '<');
    tl.play();
}

function formCloseAnim(evt, reverseArg) {
    const form = document.querySelector('[data-call-popup]');
    const tl = gsap.timeline({ paused: true });
    tl.fromTo(form, {x: 0},
        { x: 0,  ease: 'power4.easeInOut', duration: 0.2, autoAlpha: 0 }, '<');
    tl.add(() => {
        form.classList.remove('active');
    });
    tl.play();
}

function formInit() {
    const form = document.querySelectorAll('[data-call-popup]');
    document.querySelectorAll('[data-call-form]').forEach(elem => {
        elem.addEventListener('click', () => formOpen(form));
    });
    document.querySelectorAll('[data-close-form]').forEach(elem => {
        elem.addEventListener('click', () => formClose(form));
    });
}


function init() {
    formInit();
}

window.addEventListener('DOMContentLoaded', init);
