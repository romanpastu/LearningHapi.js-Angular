import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-change-data',
  templateUrl: './change-data.component.html',
  styleUrls: ['./change-data.component.css']
})
export class ChangeDataComponent implements OnInit {
  


  url: string = "";
  body;
  constructor(private http: HttpClient) {
    
   }

  ngOnInit() {
  }

  onUpdateClick(updateHash, updateHeight, updateSize, updateTime) {
    this.url = "http://localhost:3000/api/blockinfo/" + updateHash.toString();
    this.body = {
      "height": Number(updateHeight),
      "size": Number(updateSize),
      "time": Number(updateTime)
    }
    this.http.post(this.url, this.body).subscribe((result) => {
      console.log(result)
  });
    
    console.log(this.url);
    console.log(this.body);
    

  }

  onInsertClick(updateHash, updateHeight, updateSize, updateTime){
    
  }

}
