import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

numberOfVotes:number=0;
upvoteButtonClick(){
this.numberOfVotes++;
}
downvoteButtonClick(){
  this.numberOfVotes--;
}

  constructor() { }

  ngOnInit() {
  }

}
