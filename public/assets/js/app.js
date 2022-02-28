"use strict";

/* eslint-disable */
document.addEventListener('DOMContentLoaded', function () {
  function smoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    links.forEach(function (link) {
      link.addEventListener('click', scrollTo);
    });

    function scrollTo(e) {
      e.preventDefault();
      var href = this.getAttribute('href');
      var offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop,
        behavior: 'smooth'
      });
      removeHash();
    }

    function removeHash() {
      var uri = location.toString();

      if (uri.indexOf('#') > 0) {
        var cleanURI = uri.substring(0, uri.indexOf('#'));
        history.replaceState({}, document.title, cleanURI);
      }
    }
  }

  smoothScroll();

  function initParallax() {
    var rellax = new Rellax('.js-rellax', {
      center: false,
      speed: -0.5
    });
  }

  initParallax();

  function initAOS() {
    AOS.init({
      once: true,
      easing: 'ease-in-out',
      duration: 600
    });
  }

  initAOS();

  function initLightbox() {
    var lightbox = GLightbox({
      selector: '.js-btn-video',
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
  }

  initLightbox();
});