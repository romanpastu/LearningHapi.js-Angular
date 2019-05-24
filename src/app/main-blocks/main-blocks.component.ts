import { Component, OnInit } from '@angular/core';
import { JsonLoadService } from '../json-load.service'
import { Router } from '@angular/router';
import { PassdataService} from '../passdata.service'
import { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
 
  //
  closeResult: string;
  


  constructor(private modalService: NgbModal, private jsl : JsonLoadService, private router : Router, private dd : PassdataService, private http: HttpClient){

    this.jsl.getUrl().subscribe(res => {
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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
