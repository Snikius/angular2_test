import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ListComponent} from "./list.component";

import 'bootstrap';
import 'bootstrap-loader';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [
        AppComponent,
        ListComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }