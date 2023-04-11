import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  consultant_pk:number = 0;
  consultant:any = {};

  constructor(private apiService: ApiService, private route: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder) { 
    this.route.params.subscribe(params =>{
      this.consultant_pk = params['id'];      
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.apiService.getConsultant_byId(this.consultant_pk).subscribe(response=>{
      console.log(response[0]); 
      this.consultant = response[0];
    });
  }

  getDetails=new FormGroup({
    'firstName': new FormControl(),
    'lastName': new FormControl(),
    'email': new FormControl(),
    'password': new FormControl(),
    
  });

  updateUser():void{
    console.log(this.getDetails.value);    
    this.apiService.editConsultant(this.consultant_pk, this.getDetails.value).subscribe(response=>{
      console.log(response);
      if(response.message=="No user found"){
        alert("Fail");
      }else{
          alert("Account Updated!");
      }
    });
  }
}
