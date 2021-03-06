import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarCollapsed = true;
  constructor(public router: Router, private http: HttpClient, public auth: AuthService) { 
    
  }

  ngOnInit() {
  }

  onChangeDataClick(){
    this.router.navigate(['/changedata']);
  }

  onMainClick(){
    this.router.navigate(['/explorer'])
  }

  onUpdateBlocks(){
    this.http.get("https://mchain-back.herokuapp.com/api/updateblockinfo").subscribe((result) => {
      
      window.location.reload();
      
    });
    
  }

  onStatsClick(){
    this.router.navigate(['/stats'])
  }

  signOut(){
      this.auth.signOut();
  }

  onProfileClick(){
    this.router.navigate(['/profile'])
  }


}
