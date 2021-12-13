import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import {PostsServiceService} from "./services/posts-service.service";
import {HttpClientModule} from "@angular/common/http";
import { ActualJokePipe } from './pipes/actual-joke.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    ActualJokePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostsServiceService
  ],
  exports: [
    ActualJokePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
