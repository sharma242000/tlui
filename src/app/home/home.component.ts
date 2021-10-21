import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
declare var VanillaTilt;
declare var $: any
import * as Flickity from 'flickity'


declare var rCounter: any;
@Component({

  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  myScriptElement:HTMLScriptElement;

  myScript2Element:HTMLScriptElement;

  myScript3Element:HTMLScriptElement;

  myScript4Element:HTMLScriptElement;

  myScript5Element:HTMLScriptElement;





  loginUrl = environment.loginUrl;
  code: any;
  user_data
  logged_in



  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }


  constructor(private api: ApiService, private router: Router) {
    this.myScriptElement= document.createElement("script");
    this.myScriptElement.src="assets/js/vanta.waves.min.js";
    document.body.appendChild(this.myScriptElement);
    
    
    this.myScript2Element= document.createElement("script");
    this.myScript2Element.src="assets/js/script.js";
    document.body.appendChild(this.myScript2Element);


    this.myScript3Element= document.createElement("script");
    this.myScript3Element.src="assets/js/home.js";
    document.body.appendChild(this.myScript3Element);

    this.myScript4Element= document.createElement("script");
    this.myScript4Element.src="assets/js/text-auto.js";
    document.body.appendChild(this.myScript4Element);

    this.myScript5Element= document.createElement("script");
    this.myScript5Element.src="assets/js/three.min.js";
    document.body.appendChild(this.myScript5Element);




   }

  ngOnInit(): void {
    VanillaTilt.init(document.querySelector(".tilt-image"), { max: 90, speed: 400 });
    
    VanillaTilt.init(document.querySelectorAll(".tilt-image"));
    



    var testimonials = document.querySelector('.main-carousel');
    var flkty = new Flickity(testimonials, {
      autoPlay: 5000,
      wrapAround:true,
      groupCells:true,
      
    });

    var projects = document.querySelector('.project-carousel')
    var flkty2 = new Flickity(projects, {
      autoPlay: 5000,
      wrapAround:true,
      groupCells:false,
      adaptiveHeight: false
    });

    //authentication code to be copied
    this.logged_in = this.api.is_Authenticated()
    console.log(this.logged_in)
    if (this.logged_in == true) {

      this.user_data = JSON.parse(this.api.getJdata(environment.jdataKey));
      console.log(this.user_data)
      this.user_data.roll_number = window.atob(this.user_data.roll_number)
      this.api.getCustomer(this.user_data.roll_number)
        .subscribe(data => { this.user_data = data; console.log(data), error => { console.log(error) } })
    }
    else { this.router.navigate(['']) }
    //authentication code end


    $(document).ready(function () {
      //  overlay start
      $(".card").mouseover(function () {
        $(".card").css("cursor", "pointer")
      });

      $(".card-body").click(function () {
        $(this).siblings(".overlay").slideDown(400)

      });

      $(".overlay").click(function () {
        $(".overlay").slideUp(400)
      });
      // overlay end

      // funFacts start

      function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }


      var a = 0;
      $(window).scroll(function () {

        var oTop = $('#counter').offset().top - window.innerHeight;
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

      // funFacts end


      $("#myCarousel").carousel({
        interval: 2500
      });

      // Enable Carousel Indicators
      $(".item1").click(function () {
        $("#myCarousel").carousel(0);
      });
      $(".item2").click(function () {
        $("#myCarousel").carousel(1);
      });
      $(".item3").click(function () {
        $("#myCarousel").carousel(2);
      });
      $(".item4").click(function () {
        $("#myCarousel").carousel(3);
      });

      // Enable Carousel Controls
      $(".carousel-control-prev").click(function () {
        $("#myCarousel").carousel("prev");
      });
      $(".carousel-control-next").click(function () {
        $("#myCarousel").carousel("next");
      });
    });




  }
}
