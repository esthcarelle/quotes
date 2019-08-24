import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quotedescription',
  templateUrl: './quotedescription.component.html',
  styleUrls: ['./quotedescription.component.css']
})
export class QuotedescriptionComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}
  constructor() { }

  ngOnInit() {
  }

}
