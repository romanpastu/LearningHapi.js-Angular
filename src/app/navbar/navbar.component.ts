import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  onChangeDataClick(){
    this.router.navigate(['/changedata']);
  }

  onMainClick(){
    this.router.navigate(['/explorer'])
  }

  onUpdateBlocks(){
    this.http.get("http://localhost:3000/api/updateblockinfo").subscribe((result) => {
      console.log(result)
    });
    window.location.reload();
  }

  onStatsClick(){
    this.router.navigate(['/stats'])
  }
}
