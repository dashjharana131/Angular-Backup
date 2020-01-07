import {Component, Input,Output,EventEmitter} from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
    selector: 'app-employee-details',
     templateUrl: './employee-details.component.html',
    // styles : [`h1{background-color: blue;color: white;}`]
    styleUrls :  ['./employee-details.component.css'],
    // template : `<h1>{{5+4}}</h1>
    // <h2>a</h2>                  
    // <h1>{{a.length}}</h1>
    // <h1>{{a.toUpperCase()}}</h1>
    // <h1>{{sayHello()}}</h1>
    // <h1>{{b}}</h1>
    // <h1>{{window.location.href}}</h1>
    // <input type="text" value="tanima"/>`  

})

export class EmployeeDetailComponent {
    @Input() public parentData;    
    public name = "Tanima";
    public myName = "tanima rakshit";  
    public a = "Welcome to Besant Technologies";
    public b = 4+3;
    public successClass = "text-success";
    public hasError = false;
    public isSpecial = true;
    public highlightColor = "orange";  
   
    public uname = "";
    public isActive = true;
    public color = "red";
    public names = ["Tanima","Sunit","Srijan"];
    public date1 = new Date();
    //property defined as an object,here its like a key value pair
    public messagecLass = {
        "text-success" : !this.hasError,
        "text-danger" : this.hasError,
        "text-special" : this.isSpecial       
    }
    // public employees = [
    //     {id: 100,name:"john",age:23,gender:"male"},
    //     {id: 100,name:"julie",age:25,gender:"female"},
    //     {id: 100,name:"abcd",age:23,gender:"male"},
    //     {id: 100,name:"defg",age:25,gender:"female"}
    // ];
    public titleStyle = {
        "color" : "red",
        "font-style" : "italic"
    }
    _url = window.location.href;
    sayHello(){
        return "Hello" + this.a;
    }
    Tanima(event){
        this.name = "Tanima";
        alert("Welcome");
        console.log("ABCD");
        console.log(event.type);
        
    }
    @Output() public childEvent = new EventEmitter();
    fireEvent(){
        this.childEvent.emit('Hey Tanima');
        console.log(this.childEvent);
    }
    public employees:any=[];
    ngOnInit() {
        //this.employees = this._EmployeeService.getAllEmployess();
        this.employees = this._EmployeeService.getAllEmployess().subscribe(data =>this.employees=data);
       }
       constructor(private _EmployeeService : EmployeeService) {
    
    }
}
