VANTA.TOPOLOGY({
    el: ".aboutBody",
    mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x3184a,
        backgroundColor: 0x6052a,
  })

  $(window).on('load', function() {
    AOS.init({
      duration: 100,
      once: true
    });
  });