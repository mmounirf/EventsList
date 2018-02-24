import { EventDetailsPage } from './../pages/event-details/event-details';
import { SearchPipe } from './../pipes/searchPipe';
import { DateTimeFromNowPipe } from './../pipes/moment/dateTimeFromNowPipe';
import { DateTimeFormatPipe } from './../pipes/moment/dateTimeFormatPipe';
import { EventCardComponent } from './../components/event-card/event-card';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { EventsListingApp } from './app.component';
import { EventsPage } from '../pages/events/events';
import { ApiServiceProvider } from '../providers/api-service/api-service';

@NgModule({
  declarations: [
    EventsListingApp,
    EventsPage,
    EventDetailsPage,
    EventCardComponent,
    DateTimeFormatPipe,
    DateTimeFromNowPipe,
    SearchPipe
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(EventsListingApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    EventsListingApp,
    EventsPage,
    EventDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider,
  ]
})
export class AppModule {}
