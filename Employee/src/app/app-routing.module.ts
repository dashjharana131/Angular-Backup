import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-details/employee-details.component';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UserRegComponent } from './user-reg/user-reg.component';


const routes: Routes = [

  { path: 'list', component: EmployeeListComponent },
  { path: 'detail', component: EmployeeDetailComponent },
  { path: '', component: AppComponent },
  { path: 'list/addEmp', component: AddEmployeeComponent },
  { path: 'userReg', component: UserRegComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
