import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-reported-consultants',
  templateUrl: './reported-consultants.component.html',
  styleUrls: ['./reported-consultants.component.css']
})
export class ReportedConsultantsComponent implements OnInit {

  consultants:any = {};

  constructor(private apiService: ApiService){   

  }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.apiService.getReportedConsultants().subscribe(response=>{
      console.log(response);
      this.consultants = response;
    });
  }



}
