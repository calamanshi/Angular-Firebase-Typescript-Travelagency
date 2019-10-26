import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelsPageComponent } from './travels-page/travels-page.component';
import { TravelsListComponent } from './travels-list/travels-list.component';

import { TravelsService } from "./shared/travels.service";

import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootbarComponent } from './footbar/footbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    FootbarComponent,
    HomePageComponent,
    TravelsPageComponent,
    ServicesPageComponent,
    BlogPageComponent,
    TravelsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFireDatabaseModule,
   FormsModule
],
  providers: [TravelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
