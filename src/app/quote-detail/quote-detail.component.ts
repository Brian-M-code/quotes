import { Component, OnInit, Input, Output } from '@angular/core';
import { Quote } from '../quote';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input()quote:Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  // newQuote = new Quotes("", "", new Date());
  // @Output() AddQuote = new EventEmitter<Quotes>();
  // submitQuote(){
  //   this.AddQuote.emit(this.newQuote);
  //   this.newQuote = new Quotes("","",new Date());
  


constructor() { }

ngOnInit() { }
}
