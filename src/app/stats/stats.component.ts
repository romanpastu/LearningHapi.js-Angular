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

    this.jsl.getUrlStats().subscribe(res => {
      
      this.json = res;

      
    })
  }

  ngOnInit() {
  }

}
