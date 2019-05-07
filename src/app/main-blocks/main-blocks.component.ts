import { Component, OnInit } from '@angular/core';
import { JsonLoadService } from '../json-load.service'
@Component({
  selector: 'app-main-blocks',
  templateUrl: './main-blocks.component.html',
  styleUrls: ['./main-blocks.component.css']
})
export class MainBlocksComponent {
  title = 'mchain';
  json ;



  constructor(private jsl : JsonLoadService){

    this.json = this.jsl.getUrl().subscribe(res => {
      console.log(res)
      this.json = res;

      
    })
    
  }

}
