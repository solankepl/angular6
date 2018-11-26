import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { YoutubePlayerModule } from 'ngx-youtube-player';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';


@NgModule({
  declarations: [
    AppComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule,    
    HttpModule,
    YoutubePlayerModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
