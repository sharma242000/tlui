import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myScriptElement:HTMLScriptElement
  myScript2Element:HTMLScriptElement
  myScript3Element:HTMLScriptElement


  constructor() {
 this.myScriptElement=document.createElement("script");
 this.myScriptElement.src="assets/js/home.js";
 document.body.appendChild(this.myScriptElement);

 this.myScript2Element=document.createElement("script");
 this.myScript2Element.src="assets/js/aos.js";
 document.body.appendChild(this.myScript2Element);


 this.myScript3Element=document.createElement("script");
 this.myScript3Element.src="assets/js/three.min.js";
 document.body.appendChild(this.myScript3Element);

   }

  ngOnInit(): void {
    AOS.init();
  }

}
