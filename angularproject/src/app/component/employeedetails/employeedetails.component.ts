import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
  employees: any = "";
  constructor(private _empService: EmployeesService) { }

  ngOnInit() {
    this._empService.getEmployee().subscribe(data => this.employees = data)
  }

}
