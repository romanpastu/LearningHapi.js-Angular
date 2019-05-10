import { Component, OnInit } from '@angular/core';
import { JsonLoadService } from '../json-load.service'
import { Router } from '@angular/router';
import { PassdataService} from '../passdata.service'

@Component({
  selector: 'app-main-blocks',
  templateUrl: './main-blocks.component.html',
  styleUrls: ['./main-blocks.component.css']
})
export class MainBlocksComponent {
  title = 'mchain';
  json ;
  sizeInput;
 
  


  constructor(private jsl : JsonLoadService, private router : Router, private dd : PassdataService){

    this.json = this.jsl.getUrl().subscribe(res => {
      console.log(res)
      this.json = res;

      
    })
    
  }

  onUpdateClick(hash, size , time){
    
    this.dd.hash = hash;
    this.dd.size = Number(size)
    this.dd.time = Number(time)

    this.router.navigate(['/changedata']);

    
  }



}
