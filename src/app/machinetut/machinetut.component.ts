import { Component, OnInit ,ViewChild} from '@angular/core';
declare var $: any;
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { YouTubePlayerModule } from '@angular/youtube-player';



@Component({
  selector: 'app-machinetut',
  templateUrl: './machinetut.component.html',
  styleUrls: ['./machinetut.component.css']
})

export class MachinetutComponent implements OnInit {
  
  items = []
  tutorials = []

  lis = [];

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    //Code for front
    




    //code for api

    this.api.getMachinetut().subscribe(
      data => {
        this.tutorials = data
        let tut = this.tutorials
        this.api.getItems().subscribe(
          items => {
            this.items = items
            let itemlist = this.items
            for (let i = 0; i < tut.length; i++) {
              let link = tut[i].videoLink;
              link = link.split('/')
              link = link[link.length -1];
              let description = tut[i].description;
              let pk = tut[i].machineName;
              let machinename = itemlist.filter(item => item.id == pk)[0];
              let name = machinename.name;
              this.lis.push({ 'name': name, 'desc': description, 'vidlink':link })
            }
            console.log(this.lis)
          }
        )
      }
    )

  }

}
