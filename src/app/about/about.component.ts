import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  myScriptElement:HTMLScriptElement;

  myScript2Element:HTMLScriptElement;
  myScript3Element:HTMLScriptElement;
  myScript4Element:HTMLScriptElement;
  


  constructor() { 

    this.myScriptElement= document.createElement("script");
    this.myScriptElement.src="assets/js/vanta.topology.min.js";
    document.body.appendChild(this.myScriptElement);
    
    
    this.myScript2Element= document.createElement("script");
    this.myScript2Element.src="assets/js/p5.min.js";
    document.body.appendChild(this.myScript2Element);


    this.myScript3Element= document.createElement("script");
    this.myScript3Element.src="assets/js/home.js";
    document.body.appendChild(this.myScript3Element);

    this.myScript4Element= document.createElement("script");
    this.myScript4Element.src="assets/js/script2.js";
    document.body.appendChild(this.myScript4Element);

   





  }

  ngOnInit(): void {
    AOS.init({
      offset:120,
      duration: 1000,
      once: true
    });
    document.querySelectorAll('img')
     .forEach((img)=>
     img.addEventListener('load',()=>
         AOS.refresh()
     )
     
     
     );
  }

}
