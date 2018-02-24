import { Event } from './../../models/event';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'event-card',
  templateUrl: 'event-card.html'
})
export class EventCardComponent {
  //Event Card component input. Used to pass event data from parent component Events component to this child component
  @Input() eventData: Event;
  //Output event emitter to listen to event updates, used to check for event data changes from parent component
  @Output() eventUpdate: EventEmitter<Object> = new EventEmitter<Object>();
  
  constructor() {}


  //Change event status, accept 2 parameters:
  //status to be switched to and event object to be used as a reference for which event has been changes in the list
  setEventStatus(status, event) {
    //Check for status change value
    switch (status) {
      //If status changed to going
      case 'going':
        //Emit the changes to the parent component  
        this.eventUpdate.emit({status: 'going', eventData: event});
        break;

      //If status changed to ignore
      case 'ignore':
        //Emit the changes to the parent component    
        this.eventUpdate.emit({status: 'ignore', eventData: event});
        break;
      
      default:
        break;  
    }
  }
}
