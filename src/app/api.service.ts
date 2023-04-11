import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';



@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) { }
  
  getConsultants(): Observable<any>{                                  
    return this.httpClient.get("https://www.mascof.com/se/backend/api/consultants.php");
  }

  getReportedConsultants(): Observable<any>{                                  
    return this.httpClient.get("https://www.mascof.com/se/backend/api/reportedConsultants.php");
  }

  getConsultant(email:string): Observable<any>{                                  
    return this.httpClient.get("https://www.mascof.com/se/backend/api/consultant_byConsultantEmail.php?consultant_email="+email);
  }

  getConsultant_byId(pk:number): Observable<any>{                                  
    return this.httpClient.get("https://www.mascof.com/se/backend/api/consultant_byConsultantId.php?consultant_pk="+pk);
  }

  reportConsultant(pk:number): Observable<any>{                                  
    return this.httpClient.post("https://www.mascof.com/se/backend/api/reportConsultant.php", {"consultant_pk": pk});
  }

  deleteConsultant(pk:number): Observable<any>{                                  
    return this.httpClient.post("https://www.mascof.com/se/backend/api/deleteConsultant.php", {"pk": pk});
  }

  editConsultant(pk:number, consultantData:any): Observable<any>{                                  
    return this.httpClient.post("https://www.mascof.com/se/backend/api/editConsultant.php?consultant_pk="+pk, consultantData);
  }

}
