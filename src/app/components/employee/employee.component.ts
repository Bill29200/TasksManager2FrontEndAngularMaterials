import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent implements OnInit{

  public employees : any;
  public dataSource : any;

  public displayedColumns = ['employeeId', 'name', 'email', 'position','birthDate'];
 
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
          this.dataSource = new MatTableDataSource(this.employees);
         
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
