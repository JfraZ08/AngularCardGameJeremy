import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MCard} from '../../model/model-cards';
import { CardWebService } from './dal/card-web-service.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminCardsService {
private cardList:MCard[]= [];
public cardObservable: BehaviorSubject<MCard[]>= new BehaviorSubject<MCard[]>(this.cardList);
constructor(private cardWebService: CardWebService){}

async getCard(){
  const card = await this.cardWebService.getCard()
  for(let c of card){
    this.cardList.push(card)
  }
  return this.cardList;
}

getCardById(id:number){
  return this.cardWebService.getCardById(id)
}

}
