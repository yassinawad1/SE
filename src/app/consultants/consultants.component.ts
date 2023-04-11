import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.css']
})
export class ConsultantsComponent implements OnInit {

  consultant_pk:number = 0;
  consultants:any = {};

  constructor(private apiService: ApiService, private route: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder) { 
    this.route.params.subscribe(params =>{
      this.consultant_pk = params['id'];      
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.apiService.getConsultants().subscribe(response=>{
      console.log(response);
      this.consultants = response;
    });
  }

  deleteConsultant(pk:number):void{
    this.apiService.deleteConsultant(pk).subscribe(response=>{
      console.log(response);
      if(response.message==true){
        alert("Consultant Removed");
      } 
    });
  }

}
