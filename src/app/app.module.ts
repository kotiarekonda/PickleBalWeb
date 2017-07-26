import { BrowserModule } from '@angular/platform-browser';
import { HttpModule,JsonpModule } from "@angular/http";
// import {WebStorageModule, LocalStorageService} from "angular2-localstorage";
import { LocalStorageModule } from 'angular-2-local-storage';
import { commonServices } from './app.commonservices';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { MyNewComponenComponent } from './my-new-componen/my-new-componen.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { HomeComponent } from './home/home.component';
import { PlayerRegistrationComponent } from './player-registration/player-registration.component';
import { PlayerHomePageComponent } from './player-home-page/player-home-page.component';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    MyNewComponenComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    TournamentsComponent,
    HomeComponent,
   PlayerRegistrationComponent,
   PlayerHomePageComponent
  ],
  imports: [
    BrowserModule,HttpModule,JsonpModule,FormsModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserAnimationsModule,
    LocalStorageModule.withConfig({
            prefix:'pickleBall',
            storageType: 'localStorage'
    })
  ],
  providers: [commonServices,LocalStorageModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
