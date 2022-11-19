document.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('header').classList.add('scroll-active');
  } else {
    document.querySelector('header').classList.remove('scroll-active');
  }
}

window.addEventListener('load', () => {
  function splitToLinesAndFadeUp(selector, $scroller) {
    document.querySelectorAll(selector).forEach(text => {
      let mathM = text.innerHTML.match(/<\s*(\w+\b)(?:(?!<\s*\/\s*\1\b)[\s\S])*<\s*\/\s*\1\s*>|\S+/g);
      if (mathM === null) return;
      mathM = mathM.map(el => `<span style="display:inline-flex; overflow: hidden"><span>${el}</span></span>`);
      text.innerHTML = mathM.join(' ');

      let tl = gsap
        .timeline({
          paused: true,
          scrollTrigger: {
            scroller: document.body,
            trigger: text,
            once: true,
          },
        })
        .fromTo(
          text.querySelectorAll('span>span'),
          { yPercent: 100 },
          { yPercent: 0, delay: 0.4, stagger: 0.05, duration: 1.3, ease: "power4.out" }
        );
    });
  }
  splitToLinesAndFadeUp('.infrastructure-title, .apartments-title, .apartments-text, .apartments-img1__subtitle, .footer-info-title');
})

const parallaxAnim = document.querySelectorAll('.apartments img');
parallaxAnim.forEach(section => {
  const wrap = document.createElement('div');
  wrap.style.overflow = 'hidden';
  wrap.style.height = '100%';
  section.parentElement.prepend(wrap);
  gsap.set(section, { willChange: 'transform', scale: 1.5 });
  wrap.prepend(section);
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        triggerHook: 1,
        trigger: wrap,
        scrub: true,
        // start: '-100% top',
        // end: '100% bottom',
      },
    });
    tl.fromTo(
      section,
      { y: 70},
      { y: -70, duration: 0.5},
    );
});

if (document.documentElement.clientWidth > 1180) {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.main-title-wrapper',
        scrub: 2,
        start: '-50% top',
        end: '50% top',
      },
    })
    .to('.main-title-wrapper .main-title__bottom .left', {autoAlpha: 0, x: -1000, duration: 1 }, '<')
    .to('.main-title-wrapper .main-title__bottom .right', {autoAlpha: 0, x: 1000, duration: 1 }, '<')
    .to('.border-line, .border-line-top, .border-line-bottom, .main-title__top span', {autoAlpha: 0, duration: .3 }, '<');

} else {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.main-title-wrapper',
        scrub: 2,
        start: '-120% top',
        end: '100% top',
      },
    })
    .to('.main-title-wrapper .main-title__bottom .left', {autoAlpha: 0, x: -1000, duration: 1 }, '<')
    .to('.main-title-wrapper .main-title__bottom .right', {autoAlpha: 0, x: 1000, duration: 1 }, '<')
    .to('.border-line, .border-line-top, .border-line-bottom, .main-title__top span', {autoAlpha: 0, duration: .3 }, '<');

}


const blocksAnim = document.querySelectorAll('.main-block1, .main-block2, .main-block3, .about-title-wrapper, .about-text-block, .about-text-block2, .about-text-block3');
blocksAnim.forEach(section => {
  gsap.set(section, { overflow: 'visible' });
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      triggerHook: 1,
      trigger: section,
      scrub: 3,
    },
  });
  tl.fromTo(
    section,
    { y: 100 },
    { y: 0, duration: 1.2 },
  );
});

const apartmentBlockAnim = document.querySelectorAll('.apartments-list');
apartmentBlockAnim.forEach(section => {
  gsap.set(section, { overflow: 'visible' });
  const tl = gsap.timeline({
    paused: true,
    scrollTrigger: {
      triggerHook: 1,
      trigger: section,
      start: '-80% top',
      // end: '100% top',
      once: true,
    },
  });
  tl.fromTo(
    section,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 1.3 },
  );
});

$(document).ready(function(){
  $("#main").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });
});

