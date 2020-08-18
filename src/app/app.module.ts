import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostListComponent } from './post-list/post-list.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageCompressService,ResizeOptions,ImageUtilityService } from 'ng2-image-compress';
import { HttpClientModule } from '@angular/common/http';
import { SinglePostComponent } from './single-post/single-post.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import {CookieService } from "ngx-cookie-service";
import { NgxSpinnerModule } from "ngx-spinner"; 
import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MainNavBarComponent,
    PostListComponent,
    CreatePostComponent,
    SinglePostComponent,
    HomeComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxSpinnerModule ,
     
  ],
  providers: [ImageCompressService,ResizeOptions, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
