import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { GithubService } from './../services/github/github.service';
import { GithubHttpService } from './../services/github/github-http.service';
import { GithubMockService } from './../services/github/github-mock.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: GithubService, useClass: process.env.NODE_ENV === 'test' ? GithubMockService : GithubHttpService }
  ]
})

export class AppModule { }
