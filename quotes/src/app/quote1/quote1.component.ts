import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.css']
})
export class Quote1Component implements OnInit {
 quotes:Quote[]=[
  new Quote("Wil","I have a dream that one day little black boys and girls will be holding hands with little white boys and girls","Martin Luther King",new Date(2019,8,23)),
  new Quote("Merlyn","Be kind whenever possible. It is always possible","Dalai Lama",new Date(2019,7,24)),
  new Quote("Raissa","Life is a flower of which love is the honey","Victor hugo",new Date(2019,7,24)),
   new Quote("Lyse","Whatever you are, be a good one","Abraham Lincoln",new Date(2019,7,24)),
   new Quote("steve","wA great man is always willing to be little","Ralph WAldo",new Date(2019,7,25))
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
