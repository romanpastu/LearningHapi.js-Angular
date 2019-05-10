import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBlocksComponent } from './main-blocks/main-blocks.component';
import { StatsComponent } from './stats/stats.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http'; 

import {KeysPipe} from './jsonread.pipe';
import { ChangeDataComponent } from './change-data/change-data.component'
import { FormsModule } from '@angular/forms';
import { SizeFilterPipe } from './size-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    MainBlocksComponent,
    StatsComponent,
    NavbarComponent,
    KeysPipe,
    ChangeDataComponent,
    SizeFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
