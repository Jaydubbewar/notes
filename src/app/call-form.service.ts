import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallFormService {

  constructor(private http:HttpClient) { }

  saveForm(users:any[]){
    this.http.post('https://fire-crud-428fe-default-rtdb.firebaseio.com/users.json',users)
  }
}
