import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote []= [
    new Quote('Brian','Y.O.L.O (you only live once, live life to the best you can..Friend.)', new Date(2019,10,12)),
    new Quote('Einstein','Great things never come from comfort zones',new Date(1943,12,1)),
    new Quote('Beyonce','Girls run the world, if you know you know',new Date(2016,9,12)),
    new Quote('Drake','Gods plan is the best, Kikis will kill you',new Date(2018,6,12)),
    new Quote('Tomashi','To get to Heaven you start from hell',new Date(2019,10,18)),
    ];

addNewQuote(quote){
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}
displayDetails(index){
  this.quotes[index].showQuotes = !this.quotes[index].showQuotes;
}
deleteQuote(isComplete, index){
  if(isComplete){
    let toDelete=confirm('Are you sure you wanna delete'+ this.quotes[index] .inspquote +'?')

    if(toDelete){
      this.quotes.splice(index,1)
    }
  }

}

addLikeVotes(i){
  this.quotes[i].likeVotes+=1;
}
addDislikeVotes(i){
  this.quotes[i].dislikeVotes+=1;
}
  constructor() { }

  ngOnInit() {
  }

}
