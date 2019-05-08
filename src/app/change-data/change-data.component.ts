import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PassdataService} from '../passdata.service'

@Component({
  selector: 'app-change-data',
  templateUrl: './change-data.component.html',
  styleUrls: ['./change-data.component.css']
})
export class ChangeDataComponent implements OnInit {
  updateHash = this.dd.hash;
  updateSize = this.dd.size;
  updateTime = this.dd.time;
  

  url: string = "";
  body;
  constructor(private http: HttpClient , private dd : PassdataService) {

  }

  ngOnInit() {
  }

  onUpdateClick(updateHash, updateHeight, updateSize, updateTime) {
    this.url = "http://localhost:3000/api/blockinfo/" + updateHash.toString();

    this.body = {
      "hash": updateHash,
      "size": Number(updateSize),
      "time": Number(updateTime)
    }
    this.http.post(this.url, this.body).subscribe((result) => {
      console.log(result)
    });


  }

  onInsertClick(insertedHash, insertedHeight, insertedSize, insertedTime) {
    this.url = "http://localhost:3000/api/createblock";
    this.body = {
      "hash": insertedHash,
      "height": Number(insertedHeight),
      "size": Number(insertedSize),
      "time": Number(insertedTime)
    }
    this.http.post(this.url, this.body).subscribe((result) => {
      console.log(result)
    });
  }

  onDeleteClick(deletedHash) {
    this.url = "http://localhost:3000/api/blockinfo/";
    this.url += deletedHash
    console.log(this.url)
    this.http.delete(this.url).subscribe((result) => {
      console.log(result)
    });
  }

}
