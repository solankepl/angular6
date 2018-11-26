import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Http, Response, Headers, RequestOptions } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class YoutubeapiService {

  constructor(private http: Http) {
    this.getJSON().subscribe(data => {
      console.log(data)
  });
   }

   public getJSON(): Observable<any> {
    return this.http.get("//drive.google.com/file/d/1K3jscgcSygrzdPeD4yBoU1zXBmfffvSt/view")
}
}
