import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.css']
})
export class Quote1Component implements OnInit {
 quotes:Quote[]=[
   new Quote("aaa","what a beautifulname it is","mesdd",new Date())
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
