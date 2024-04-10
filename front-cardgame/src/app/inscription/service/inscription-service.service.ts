import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionServiceService {
  private apiUrl = 'http://localhost:3010/api/profiles';
  

  constructor(private http:HttpClient) { 
  }

  inscrireUtilisateur(formData: any): Observable<any> {
    return this.http.put(this.apiUrl, formData)
  }
}
