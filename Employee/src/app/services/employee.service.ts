import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../Share/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public _http:HttpClient) { }
  //_url:string = '/assets/data/employees.json';
  _url:string = 'https://jsonplaceholder.typicode.com/posts';
  getAllEmployess():Observable<IEmployee[]>{
    //return this._http.get(this._url);
    return this._http.get<IEmployee[]>(this._url);
  }
// public getAllEmployess(){
//   return [
//       {id: 100,name:"john",age:23,gender:"male"},
//       {id: 100,name:"julie",age:25,gender:"female"},
//       {id: 100,name:"abcd",age:23,gender:"male"},
//       {id: 100,name:"defg",age:25,gender:"female"}
//   ];
// }
  // public employees = [
  //   {id: 100,name:"john",age:23,gender:"male"},
  //   {id: 100,name:"julie",age:25,gender:"female"},
  //   {id: 100,name:"abcd",age:23,gender:"male"},
  //   {id: 100,name:"defg",age:25,gender:"female"}
//];
}
