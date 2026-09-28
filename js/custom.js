
  (function ($) {
  
  "use strict";

    // HERO ENTRANCE: hide now (preloader covers the page), play once it lifts
    var $hero = $('.hero');
    var heroPlayed = false;

    function playHeroAnimation() {
      if (heroPlayed) return;
      heroPlayed = true;
      $hero.addClass('hero-anim-play');
    }

    $hero.addClass('hero-anim');
    // Fallback so the hero never stays hidden if the load event is slow (e.g. a stalled CDN asset)
    setTimeout(playHeroAnimation, 4000);

    // PRE LOADER — hero animation starts only once the overlay is fully gone,
    // otherwise it plays hidden behind the fading white preloader
    $(window).load(function(){
      $('.preloader').fadeOut(600, playHeroAnimation);
    });

    // CUSTOM LINK
    // .js-scroll adds smooth scrolling without .custom-link's button styling
    $('.custom-link, .js-scroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);

// Career start: May 2018 (WebMobi Technologies)
const CAREER_START_UTC = Date.UTC(2018, 4, 1);
const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;
const experienceYears = Math.floor((Date.now() - CAREER_START_UTC) / MS_PER_YEAR);

document.querySelectorAll('#experianceYear, .js-exp-years').forEach(el => {
    el.textContent = experienceYears;
});

const experienceCounterEl = document.getElementById('experienceCounter');
if (experienceCounterEl) {
    experienceCounterEl.setAttribute('data-target', experienceYears);
}


// SKILL PROGRESS BARS
function animateProgress(bar, timing = 20) {
    const label = bar.dataset.label || '';
    const target = Math.min(Math.max(+bar.dataset.target || 0, 0), 100);
    let width = 0;

    const interval = setInterval(() => {
        if (width >= target) {
            clearInterval(interval);
            return;
        }
        width++;
        bar.style.width = width + '%';
        bar.textContent = label + ' ' + width + '%';
    }, timing);
}

const progressObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgress(entry.target);
            progressObserver.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.my-progress-bar[data-target]').forEach(bar => {
    bar.textContent = bar.dataset.label + ' 0%';
    progressObserver.observe(bar);
});

  
// CUSTOM COUNTER
  function animateCounter(element, speed = 150) {
    const target = +element.getAttribute('data-target');
    let count = 0;

    const updateCounter = () => {
        if (count < target) {
            count++;
            element.textContent = count;
            setTimeout(updateCounter, speed);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// Observer for scroll activation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target); // Run only once
        }
    });
});

// Apply observer to all counters
document.querySelectorAll('.counter').forEach(counter => {
    observer.observe(counter);
});



