import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PassdataService } from '../passdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-data',
  templateUrl: './change-data.component.html',
  styleUrls: ['./change-data.component.css']
})
export class ChangeDataComponent implements OnInit {
  updateHash = this.dd.hash;
  updateSize = this.dd.size;
  updateTime = this.dd.time;
  deleteSuccess: Boolean = false;
  deleteError: Boolean = false;
  insertSuccess: Boolean = false;
  insertError: Boolean = false;
  updateSuccess: Boolean = false;
  updateError: Boolean = false;

  url: string = "";
  body;
  constructor(private http: HttpClient, private dd: PassdataService, private router: Router) {

  }

  ngOnInit() {
  }

  onUpdateClick(updateHash, updateSize, updateTime) {
    this.updateError = false;
    this.updateSuccess = false;
    this.url = "https://mchain-back.herokuapp.com/api/blockinfo/" + updateHash.toString();

    this.body = {
      "hash": updateHash,
      "size": Number(updateSize),
      "time": Number(updateTime)
    }
    this.http.post(this.url, this.body).subscribe((result) => {
      
      if (result) {
        this.updateSuccess = true;


        setTimeout(() => {
          this.router.navigate(['/explorer']);
        }, 2000);

        //  this.router.navigate(['/explorer']);




      } else {
        this.updateError = true;
      }
    });


  }

  onInsertClick(insertedHash, insertedHeight, insertedSize, insertedTime) {
    this.insertError = false;
    this.insertSuccess = false;
    this.url = "https://mchain-back.herokuapp.com/api/createblock";
    this.body = {
      "hash": insertedHash,
      "height": Number(insertedHeight),
      "size": Number(insertedSize),
      "time": Number(insertedTime)
    }
    
    if (insertedHash != null && insertedHash != "") {
      this.http.post(this.url, this.body).subscribe((result) => {
        
        if (result) {
          this.insertSuccess = true;

        } else {
          this.insertError = true;
        }
      });
    } else {
      this.insertError = true;
    }


  }

  onDeleteClick(deletedHash) {
    this.deleteSuccess = false;
    this.deleteError = false;
    this.url = "https://mchain-back.herokuapp.com/api/blockinfo/";
    this.url += deletedHash
    
    this.http.delete(this.url).subscribe((result) => {
      
      if (result) {
        this.deleteSuccess = true;
      } else {
        this.deleteError = true;
      }

    });

  }

}
