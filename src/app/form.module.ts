import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import FormComponent from './form.component';
import 'bootstrap';
import 'bootstrap-loader';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        FormComponent
    ],
    bootstrap:    [ FormComponent ]
})
export class FormModule { }
