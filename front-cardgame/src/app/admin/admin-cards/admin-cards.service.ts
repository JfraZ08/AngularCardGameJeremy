import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminCardsService {
private apiUrl = 'http://localhost:3000/api/cards';
  constructor(private http: HttpClient) { }
  // introduirecartes()
}
