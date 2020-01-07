import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _router : Router,private _EmployeeService : EmployeeService) {
    
  }

  ngOnInit() {
   //this.employees = this._EmployeeService.getAllEmployess();
   this.employees = this._EmployeeService.getAllEmployess().subscribe(data =>this.employees=data);
  }
  public employees:any=[];
//   public employees = [
//     {id: 100,name:"john",age:23,gender:"male"},
//     {id: 100,name:"julie",age:25,gender:"female"},
//     {id: 100,name:"abcd",age:23,gender:"male"},
//     {id: 100,name:"defg",age:25,gender:"female"}
// ];
gotoAddEmp(){
  this._router.navigateByUrl('list/addEmp');
}
}
