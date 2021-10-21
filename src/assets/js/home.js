//navvbar
$(document).ready(function () {
    $(window).scroll(function () {
        $('nav').toggleClass("navbar-active", ($(window).scrollTop() > screen.availHeight / 13));
     });
  });
  
  $(function () {
    $(".nav-icon").click(function () {
      $(".nav-icon").toggleClass("navbar-on");
    });
  });
 
    

  // counter
  
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  
  
    var a = 0;
    $(window).scroll(function () {
  
      var oTop = $('#counter').offset()?.top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
            countNum: countTo
          },
  
            {
  
              duration: 2000,
              easing: 'swing',
              step: function () {
                $this.text(Math.floor(parseInt(this.countNum)));
              },
              complete: function () {
                $this.text(numberWithCommas(this.countNum) + "+");
                //alert('finished');
              }
  
            });
        });
        a = 1;
      }
  
    });
  

    // swiper

  