import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardWebService {

  constructor() { }

  async getCard(){
    const response = await fetch("http://localhost:3000/api/cards");
    return response.json();
  }

  async getCardById(cardId: number){
    const response = await fetch(`http://localhost:3000/api/cards/${cardId}`);
    return response.json();
  }
}
