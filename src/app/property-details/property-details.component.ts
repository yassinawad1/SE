import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  consultant_pk:number = 0;
  consultantName:string = "";

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
      this.consultantName = response[0].firstName+" "+response[0].lastName;
    });
  }

  reportConsultant():void{
    this.apiService.reportConsultant(this.consultant_pk).subscribe(response=>{
      if(response.message==true){
        alert("Consultant Reported");
      } 
    });
  }

}
