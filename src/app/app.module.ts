import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BagComponent } from './bag/bag.component';
import {MatCardModule} from '@angular/material/card';
import { LetterTrayComponent } from './letter-tray/letter-tray.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BagComponent,
    LetterTrayComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
