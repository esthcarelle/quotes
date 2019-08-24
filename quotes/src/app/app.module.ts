import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Quote1Component } from './quote1/quote1.component';
import { FormsModule } from '@angular/forms';
import { QuotedescriptionComponent } from './quotedescription/quotedescription.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuotepipePipe } from './quotepipe.pipe';
import { VoteComponent } from './vote/vote.component';
import { HighlightDirective } from './highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    Quote1Component,
    QuotedescriptionComponent,
    QuoteFormComponent,
    QuotepipePipe,
    VoteComponent,
    HighlightDirective
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
