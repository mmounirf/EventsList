import { ApiServiceProvider } from './../../providers/api-service/api-service';
import { Event } from './../../models/event';
import { Component, EventEmitter } from '@angular/core';
import { NavController, LoadingController, NavParams, IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs';  
import { EventDetailsPage } from '../event-details/event-details';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  
  events: Event[];
  eventsLoaded: boolean;
  selectedEventId: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiService: ApiServiceProvider,
    public loadingCtrl: LoadingController
  ) {
    
  }

  onEventUpdate($event) {
    let eventIndex = this.events.indexOf($event.eventData);
    this.events[eventIndex].status = $event.status;
  }

  ionViewDidLoad() {
    this.apiService.getEvents().subscribe(res => {
      this.eventsLoaded = true;
      this.events = res;
    }, (error) => {
      this.apiService.restErrorHandling(error);
    });
  }

  goToEvent(eventData, $event) {
    this.selectedEventId = eventData.id;
    if ($event.path[0].tagName != "SPAN" && $event.path[0].tagName != "ION-ICON") {
      this.navCtrl.push(EventDetailsPage, {
        'event': eventData
      })
    }

  }




}
