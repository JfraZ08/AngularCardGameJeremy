import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  private apiUrl = 'http://localhost:3010/api/login/'
  constructor(private http: HttpClient) { }
  connexionUtilisateur(formData: any): Observable <any> {
    console.log(formData)
    return this.http.post(this.apiUrl, formData)

  }
}
