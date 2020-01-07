import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent} from './app.component';
import { EmployeeListComponent} from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent} from './employee/employee-details/employee-details.component';
import { FormsModule} from '@angular/forms'
import { EmployeeTitlePipe} from './employee/employee-details/employee.title.pipe';
import { AddEmployeeComponent} from './add-employee/add-employee.component';
import { EmployeeService} from './services/employee.service';
import { HttpClientModule} from '@angular/common/http';
import { UserRegComponent } from './user-reg/user-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeTitlePipe,
    AddEmployeeComponent,
    UserRegComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
