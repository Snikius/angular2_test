import 'babel-polyfill';
import 'reflect-metadata';
import 'script!zone.js';

import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormModule } from './app/form.module';

platformBrowserDynamic().bootstrapModule(FormModule);
