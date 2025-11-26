
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
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

    const result = new Date().getFullYear() - 2018;
    document.getElementById('experianceYear').textContent = result;
   // document.querySelector('.experianceYear').textContent = (result - 1)+'+';



    // custom
    function animateProgress(barId, label, target,timing) {
      let bar = document.getElementById(barId);
      let width = 0;
  
      let interval = setInterval(() =>   { 
          if (width >= target) {
              clearInterval(interval);
          } else {
              width++;
              bar.style.width = width + "%";
              bar.textContent = label + " "+width + "%";
          }
      }, timing);
  }
  
  // Call functions
  animateProgress("phpBar", "Codeigniter", 95,20);
  animateProgress("laravelBar", "Laravel", 80,30);
  animateProgress("cssBar", "Html,Css", 90,40);
  animateProgress("jsBar", "Jquery", 80,50);
  animateProgress("mysqlBar", "MySQL", 70,60);
  animateProgress("gitBar", "Github", 90,70);
  
  
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



