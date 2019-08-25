import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.css']
})
export class Quote1Component implements OnInit {
 quotes:Quote[]=[

   new Quote("Abraham Lincoln","Whatever you are, be a good one","lyse",new Date(2019,8,24)),
   new Quote("Ralph WAldo","wA great man is always willing to be little","steve",new Date(2019,8,25))
 ]
 showDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
deleteQuote(isComplete, index){
  if (isComplete) {
    this.quotes.splice(index,1);
  }
}
addNewQuote(quote){
 
  this.quotes.push(quote)
}

  constructor() { }

  ngOnInit() {
  }

}
