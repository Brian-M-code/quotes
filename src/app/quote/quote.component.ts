import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote []= [
    new Quote('Brian','YOLO', new Date(2019,1,12)),
    new Quote('Einstein','Dark matter matters',new Date(2019,1,12)),
    new Quote('Beyonce','Girl run the world, if you know you know',new Date(2019,1,12)),
    new Quote('Drake','Gods plan',new Date(2019,1,12)),
    new Quote('Tomashi','To get to Heaven you start from hell',new Date(2019,1,12)),
    new Quote('Mutuma','Dreaming without actualizing the dream is bullshit',new Date(2019,1,12)),
  ];


  constructor() { }

  ngOnInit() {
  }

}
