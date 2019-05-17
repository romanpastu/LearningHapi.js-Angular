import { Component, OnInit } from '@angular/core';
import { JsonLoadService } from '../json-load.service'
import { Router } from '@angular/router';
import { PassdataService} from '../passdata.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-blocks',
  templateUrl: './main-blocks.component.html',
  styleUrls: ['./main-blocks.component.css']
})
export class MainBlocksComponent {
  title = 'mchain';
  json ;
  sizeInput;
  hashInput;
  url: string = "";
 
  


  constructor(private jsl : JsonLoadService, private router : Router, private dd : PassdataService, private http: HttpClient){

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

  onDeleteClick(hash){
    this.url = "http://localhost:3000/api/blockinfo/";
    this.url += hash
    console.log(this.url)
    this.http.delete(this.url).subscribe((result) => {
      console.log(result)
      window.location.reload();
      // if (result) {
      //   this.deleteSuccess = true;
      // } else {
      //   this.deleteError = true;
      // }

    });
  }



}
