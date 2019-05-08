import { Component, OnInit } from '@angular/core';
import { JsonLoadService } from '../json-load.service'
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  json

  constructor(private jsl : JsonLoadService) { 

    this.json = this.jsl.getUrlStats().subscribe(res => {
      console.log(res)
      this.json = res;

      
    })
  }

  ngOnInit() {
  }

}
