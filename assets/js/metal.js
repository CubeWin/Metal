window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  let scroll = document.body.scrollTop;
  let nav = document.querySelector('#nav-body')
  if (scroll > 20 || document.documentElement.scrollTop > 20) {
    nav.classList.remove('cw__navigation--sticky');
    nav.classList.add('cw__navigation--scrolldown');
  } else {
    nav.classList.remove('cw__navigation--scrolldown');
    nav.classList.add('cw__navigation--sticky');
  }
};

$("#owl-servicios").owlCarousel({
  loop: true,
  dots: false,
  nav: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    770: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
