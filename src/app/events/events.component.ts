import { Component, OnInit } from '@angular/core';
declare var $: any;
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import * as AOS from 'aos'
@Component({     
  selector: 'app-events',      
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']     
})  
export class EventsComponent implements OnInit {
    
// myScriptElement:HTMLScriptElement;
// myScript2Element:HTMLScriptElement;
// myScript3Element:HTMLScriptElement;
 
  items = []        
  events = []    
  lis = [];        
   
  constructor(private api: ApiService) {


    // this.myScriptElement= document.createElement("script");
    // this.myScriptElement.src="assets/js/vanta.waves.min.js";
    // document.body.appendChild(this.myScriptElement);

    // this.myScript2Element= document.createElement("script");
    // this.myScript2Element.src="assets/js/script4.js";
    // document.body.appendChild(this.myScript2Element);

    // this.myScript3Element= document.createElement("script");
    // this.myScript3Element.src="assets/js/vanta.topology.min.js";
    // document.body.appendChild(this.myScript3Element);
  }

  

  ngOnInit(): void {
    //Code for front
    
    AOS.init({
      duration: 100,
      once: true
    });




    //code for api

    this.api.getEvents().subscribe(
      data => {
        this.events = data
        let ev = this.events
        this.api.getItems().subscribe(
          items => {
            this.items = items
            let itemlist = this.items
            for (let i = 0; i < ev.length; i++) {
              let details = ev[i].details;
              let image = ev[i].image;
              let link = ev[i].link;
              let date = ev[i].date;
              let name = ev[i].name;
              console.log(name);
              this.lis.push({ 'name': name, 'description': details, 'imagePath': image, 'extlink': link, 'date':date })
            }
            console.log(this.lis)
          }
        )
      }
    )

  }

}

