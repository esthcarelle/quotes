import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Quote1Component } from './quote1/quote1.component';
import { FormsModule } from '@angular/forms';
import { QuotedescriptionComponent } from './quotedescription/quotedescription.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { VoteComponent } from './vote/vote.component';
import { HighlightDirective } from './highlight.directive';
import {TimeAgoPipe} from 'time-ago-pipe';
@NgModule({
  declarations: [
    AppComponent,
    Quote1Component,
    QuotedescriptionComponent,
    QuoteFormComponent,
    VoteComponent,
    HighlightDirective,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
