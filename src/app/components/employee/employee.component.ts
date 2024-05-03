import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit{

  public employees : any;
  //--------------------------------------------------------

  constructor(private http : HttpClient){} 
  //---------------------------------------------------------
  ngOnInit()
  {
    this.http.get("http://localhost:8080/api/tasksManager/employee/all")
    .subscribe
    (
      {
        next:(data: Object)=>
          {
          this.employees = data;
          console.log(data);
          },
         error: (err: any) =>
          {
            console.log(err);
          }
      }
    );
    
  }
  
  //---------------------------------------------------------

}
