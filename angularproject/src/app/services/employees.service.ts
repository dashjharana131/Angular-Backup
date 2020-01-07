import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../model/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  _url: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private _http: HttpClient) { }

  // getEmployee() {
  //   this._http.get(this._url);
  // }

  getEmployee(): Observable<IEmployee[]> {
    return this._http.get<IEmployee[]>(this._url);
  }
}
