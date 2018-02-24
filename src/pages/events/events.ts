import { ApiServiceProvider } from './../../providers/api-service/api-service';
import { Event } from './../../models/event';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventDetailsPage } from '../event-details/event-details';
import * as moment from 'moment';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  //Array of events to store GET request results.
  events: Event[];
  //Array of events to store today's events.
  currentDayEvents: Event[] = [];
  //Array of events to store events running this week.
  currentWeekEvents: Event[] = [];
  //Array of events to store the rest of events that does not apply to the 2 above arrays.
  otherEvents: Event[] = [];
  //Selected Event ID used to check which event has been selected and keep track of it.
  selectedEventId: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public apiService: ApiServiceProvider,
  ) {}

  //Check if the event has been changed
  onEventUpdate($event) {
    //Get the index of which event has been updated in the list
    let eventIndex = this.events.indexOf($event.eventData);
    //Manipulate event status property within the list
    this.events[eventIndex].status = $event.status;
  }

  //Once the view has been laoded
  ionViewDidLoad() {
    //Trigger our API service getEvents() method
    this.apiService.getEvents().subscribe(res => {
      //Response was received, assign the results to our events array
      this.events = res;

      //Catch the error
    }, (error) => {
      //Handle the error using our errorHandling method which accepts the error object as arg
      this.apiService.restErrorHandling(error);
      }, () => {
      //The request has been completed, let's loop over our events array and sort our events based on dateTime range
        this.events.forEach(event => {
          //Check if event is occuring today
          if (this.isToday(event.dateTime)) {
          //Add the event to array of currentDay events
          this.currentDayEvents.push(event);
          }
          
          //Check if event is occuring this week and also not today
          if (this.isDuringWeek(event.dateTime) && !this.isToday(event.dateTime)) {
            //Add the event to array of currentWeek events
            this.currentWeekEvents.push(event);
          }
          //If the event is not occuring today or not during this week
          if (!this.isToday(event.dateTime) && !this.isDuringWeek(event.dateTime)) {
            //Add event to array of otherEvents
            this.otherEvents.push(event)
          }
      });
    });
  }


  //Method used to push the event details view into our navigation stack, accepts 2 args, the eventData to be used in the eventDetails page and click $event.
  goToEvent(eventData, $event) {
    //Get the clicked event id
    this.selectedEventId = eventData.id;
    //Ugly fix to prevent the navigation if the click event triggered from going/ignore buttons
    if ($event.path[0].tagName != "SPAN" && $event.path[0].tagName != "ION-ICON") {
      //Click event is triggered from other targets rather than the buttons, push EventDetailsPage view to our navigation stack and send the eventData as param.
      this.navCtrl.push(EventDetailsPage, {
        'event': eventData
      })
    }
  }

  //Check event date if occuring today
  isToday(eventDate) {
    //Get current day
    let currentDay = moment(new Date(), 'DD-MM-YYYY kk:mm:ss').dayOfYear();
    //Get event day
    let eventDay = moment(eventDate, 'DD-MM-YYYY kk:mm:ss').dayOfYear();
    //Returns true if current day equals to event day and false instead
    return currentDay == eventDay ? true : false; 
  }

  //Check event date if occuring during the current week
  isDuringWeek(eventDate) {
    //Get current week number
    let currentWeek = moment(new Date(), 'DD-MM-YYYY kk:mm:ss').isoWeeks();
    //Get current day number
    let eventWeek = moment(eventDate, 'DD-MM-YYYY kk:mm:ss').isoWeeks();
    //Returns true if current week number equals to event week number and false instead
    return currentWeek == eventWeek ? true : false; 
  }

}
