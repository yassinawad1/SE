import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private apiService:ApiService, private router: Router) { }

  ngOnInit(): void {
    
  }

  getDetails=new FormGroup({
    'email': new FormControl(),
    'password': new FormControl(),
    
  });

  checkUser():void{
    console.log(this.getDetails.value);    
    this.apiService.getConsultant(this.getDetails.value.email).subscribe(response=>{
      console.log(response);
      if(response.message=="No user found"){
        alert("Account Does Not Exist");
      }else{
        if(response[0].password == this.getDetails.value.password){
          alert("Successful Log in");
           this.router.navigate(['/properties']);

        }else{
          alert("Incorrect Password, Try Again!");
        }
      }
    });
  }

}
