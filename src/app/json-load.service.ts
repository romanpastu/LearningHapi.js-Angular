import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class JsonLoadService {

  constructor(private http: HttpClient) {


  }

  getUrl() {
    return this.http.get('http://localhost:3000/api/blockinfo')
      .pipe(map(res => res));
  }

  getUrlStats() {
    return this.http.get('http://localhost:3000/api/stats')
      .pipe(map(res => res));
  }
}


