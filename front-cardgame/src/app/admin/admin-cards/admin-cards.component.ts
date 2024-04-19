import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MCard} from '../../model/model-cards'

@Component({
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.css']
})
export class AdminCardsComponent implements OnInit{
  constructor(private http: HttpClient){}
  cards: MCard[] = [];

  ngOnInit(){
    this.fetchCards();
  }

  fetchCards(){
    this.http.get<any>('http://localhost:3000/api/cards').subscribe((card:MCard[])=>{
      try {
        this.cards = card;
      } catch (error) {
        console.log(error);
      };
    })
  }
}
