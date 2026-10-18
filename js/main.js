/* ============================================================
   SHREE HINGLAJ SALES & SERVICES — Production JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ========================================= */
  /* YEAR (Footer copyright)                   */
  /* ========================================= */

  var yearEls = document.querySelectorAll('[data-year]');
  yearEls.forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ========================================= */
  /* NAVBAR — MOBILE MENU                      */
  /* ========================================= */

  var mobileMenuBtn = document.querySelector('[data-mobile-menu-btn]');
  var mobileMenu = document.querySelector('[data-mobile-menu]');

  if (mobileMenuBtn && mobileMenu) {
    var iconBars = mobileMenuBtn.querySelector('[data-icon-bars]');
    var iconX = mobileMenuBtn.querySelector('[data-icon-x]');

    mobileMenuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('open');
      var isOpen = mobileMenu.classList.contains('open');
      if (iconBars) iconBars.style.display = isOpen ? 'none' : '';
      if (iconX) iconX.style.display = isOpen ? '' : 'none';
    });
  }

  /* ========================================= */
  /* NAVBAR — SERVICES DROPDOWN                */
  /* ========================================= */

  var dropdown = document.querySelector('[data-services-dropdown]');
  var dropdownToggle = document.querySelector('[data-services-toggle]');

  if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });

    document.addEventListener('click', function (e) {
      if (dropdown && !dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });
  }

  /* Mobile services submenu */

  var mobileServices = document.querySelector('[data-mobile-services]');
  var mobileServicesToggle = document.querySelector('[data-mobile-services-toggle]');

  if (mobileServices && mobileServicesToggle) {
    mobileServicesToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      mobileServices.classList.toggle('open');
    });
  }

  /* Close mobile menu when any link inside is clicked */

  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        if (mobileServices) mobileServices.classList.remove('open');
      });
    });
  }

  /* ========================================= */
  /* NAVBAR — ACTIVE LINK HIGHLIGHT            */
  /* ========================================= */

  function setActiveLinks() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    var isHome = path === '' || path === 'index.html';

    document.querySelectorAll('[data-nav-link]').forEach(function (link) {
      var href = link.getAttribute('href');
      link.classList.remove('active');

      if (isHome && (href === 'index.html' || href === './' || href === '/')) {
        link.classList.add('active');
      } else if (!isHome && href === path) {
        link.classList.add('active');
      }
    });
  }

  setActiveLinks();

  /* ========================================= */
  /* FOOTER — CALL POPUP                       */
  /* ========================================= */

  var callPopup = document.querySelector('[data-call-popup]');
  var callPopupNumber = document.querySelector('[data-call-number]');

  document.querySelectorAll('[data-call-number-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!callPopup || !callPopupNumber) return;
      callPopupNumber.textContent = btn.getAttribute('data-call-number-btn');
      callPopup.classList.add('open');
    });
  });

  if (callPopup) {
    var popupCancel = callPopup.querySelector('[data-call-cancel]');
    var popupCall = callPopup.querySelector('[data-call-confirm]');

    if (popupCancel) {
      popupCancel.addEventListener('click', function () {
        callPopup.classList.remove('open');
      });
    }

    if (popupCall) {
      popupCall.addEventListener('click', function () {
        window.location.href = 'tel:' + callPopupNumber.textContent.replace(/\s/g, '');
        callPopup.classList.remove('open');
      });
    }

    callPopup.addEventListener('click', function (e) {
      if (e.target === callPopup) {
        callPopup.classList.remove('open');
      }
    });
  }

  /* ========================================= */
  /* HOME — CLIENTS SLIDESHOW CAROUSEL         */
  /* ========================================= */

  var carousel = document.querySelector('[data-clients-carousel]');

  if (carousel) {
    var track = carousel.querySelector('[data-carousel-track]');
    var slides = carousel.querySelectorAll('[data-carousel-slide]');
    var dots = carousel.querySelectorAll('[data-carousel-dot]');
    var current = 0;
    var total = slides.length;
    var timer = null;

    function goToSlide(index) {
      current = index % total;
      if (current < 0) current = total - 1;
      track.style.transform = 'translateX(-' + current * 100 + '%)';
      dots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === current);
      });
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goToSlide(i);
      });
    });

    function startAuto() {
      timer = setInterval(function () {
        goToSlide(current + 1);
      }, 3500);
    }

    startAuto();
    goToSlide(0);

    window.addEventListener('beforeunload', function () {
      if (timer) clearInterval(timer);
    });
  }

  /* ========================================= */
  /* GENERIC IMAGE SLIDESHOW (Home About)      */
  /* 3 images, auto 4000ms, prev/next/dots     */
  /* ========================================= */

  var aboutSlideshow = document.querySelector('[data-about-slideshow]');

  if (aboutSlideshow) {
    var aboutImages = aboutSlideshow.querySelectorAll('[data-slide-img]');
    var aboutDots = aboutSlideshow.querySelectorAll('[data-slide-dot]');
    var aboutPrev = aboutSlideshow.querySelector('[data-slide-prev]');
    var aboutNext = aboutSlideshow.querySelector('[data-slide-next]');
    var aboutCurrent = 0;
    var aboutTotal = aboutImages.length;
    var aboutTimer = null;

    function aboutGoTo(index) {
      aboutCurrent = index % aboutTotal;
      if (aboutCurrent < 0) aboutCurrent = aboutTotal - 1;
      aboutImages.forEach(function (img, i) {
        img.classList.toggle('active', i === aboutCurrent);
      });
      aboutDots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === aboutCurrent);
      });
    }

    if (aboutPrev) {
      aboutPrev.addEventListener('click', function () {
        aboutGoTo(aboutCurrent - 1);
      });
    }

    if (aboutNext) {
      aboutNext.addEventListener('click', function () {
        aboutGoTo(aboutCurrent + 1);
      });
    }

    aboutDots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        aboutGoTo(i);
      });
    });

    aboutTimer = setInterval(function () {
      aboutGoTo(aboutCurrent + 1);
    }, 4000);

    aboutGoTo(0);

    window.addEventListener('beforeunload', function () {
      if (aboutTimer) clearInterval(aboutTimer);
    });
  }

  /* ========================================= */
  /* ABOUT US PAGE — WHO WE ARE SLIDESHOW      */
  /* 3 images with titles, auto 4500ms         */
  /* ========================================= */

  var whoSlideshow = document.querySelector('[data-who-slideshow]');

  if (whoSlideshow) {
    var whoImages = whoSlideshow.querySelectorAll('[data-who-img]');
    var whoDots = whoSlideshow.querySelectorAll('[data-who-dot]');
    var whoPrev = whoSlideshow.querySelector('[data-who-prev]');
    var whoNext = whoSlideshow.querySelector('[data-who-next]');
    var whoTitle = whoSlideshow.querySelector('[data-who-title]');
    var whoText = whoSlideshow.querySelector('[data-who-text]');
    var whoCurrent = 0;
    var whoTotal = whoImages.length;
    var whoTimer = null;

    function whoGoTo(index) {
      whoCurrent = index % whoTotal;
      if (whoCurrent < 0) whoCurrent = whoTotal - 1;

      whoImages.forEach(function (img, i) {
        img.classList.toggle('active', i === whoCurrent);
      });

      whoDots.forEach(function (dot, i) {
        dot.classList.toggle('active', i === whoCurrent);
      });

      if (whoTitle) {
        whoTitle.textContent = whoImages[whoCurrent].getAttribute('data-title') || '';
      }
      if (whoText) {
        whoText.textContent = whoImages[whoCurrent].getAttribute('data-text') || '';
      }
    }

    if (whoPrev) {
      whoPrev.addEventListener('click', function () {
        whoGoTo(whoCurrent - 1);
      });
    }

    if (whoNext) {
      whoNext.addEventListener('click', function () {
        whoGoTo(whoCurrent + 1);
      });
    }

    whoDots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        whoGoTo(i);
      });
    });

    whoTimer = setInterval(function () {
      whoGoTo(whoCurrent + 1);
    }, 4500);

    whoGoTo(0);

    window.addEventListener('beforeunload', function () {
      if (whoTimer) clearInterval(whoTimer);
    });
  }

  /* ========================================= */
  /* SERVICES PAGE — APPLICATIONS SLIDESHOW    */
  /* 6 images, fade transition, auto 4000ms    */
  /* ========================================= */

  var svcSlideshow = document.querySelector('[data-svc-slideshow]');

  if (svcSlideshow) {
    var svcImg = svcSlideshow.querySelector('[data-svc-img]');
    var svcTitle = svcSlideshow.querySelector('[data-svc-title]');
    var svcDots = svcSlideshow.querySelectorAll('[data-svc-dot]');
    var svcPrev = svcSlideshow.querySelector('[data-svc-prev]');
    var svcNext = svcSlideshow.querySelector('[data-svc-next]');
    var svcCurrent = 0;
    var svcTimer = null;
    var svcFading = false;

    var svcSlides = svcDots.length;

    function svcGoTo(index) {
      if (svcFading) return;
      svcFading = true;

      svcCurrent = index % svcSlides;
      if (svcCurrent < 0) svcCurrent = svcSlides - 1;

      svcImg.classList.add('fading');

      setTimeout(function () {
        var dot = svcDots[svcCurrent];
        svcImg.src = dot.getAttribute('data-src');
        svcImg.alt = dot.getAttribute('data-alt') || '';
        if (svcTitle) {
          svcTitle.textContent = dot.getAttribute('data-title') || '';
        }
        svcDots.forEach(function (d, i) {
          d.classList.toggle('active', i === svcCurrent);
        });
        svcImg.classList.remove('fading');
        svcFading = false;
      }, 250);
    }

    if (svcPrev) {
      svcPrev.addEventListener('click', function () {
        svcGoTo(svcCurrent - 1);
      });
    }

    if (svcNext) {
      svcNext.addEventListener('click', function () {
        svcGoTo(svcCurrent + 1);
      });
    }

    svcDots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        svcGoTo(i);
      });
    });

    svcTimer = setInterval(function () {
      svcGoTo(svcCurrent + 1);
    }, 4000);

    svcGoTo(0);

    window.addEventListener('beforeunload', function () {
      if (svcTimer) clearInterval(svcTimer);
    });
  }

  /* ========================================= */
  /* SERVICES PAGE — ANCHOR SCROLL             */
  /* ========================================= */

  if (window.location.hash) {
    var target = document.querySelector(window.location.hash);
    if (target) {
      setTimeout(function () {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }

});
