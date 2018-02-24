import { Event } from './../../models/event';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-card',
  templateUrl: 'event-card.html'
})
export class EventCardComponent {

  @Input() eventData: Event;
  @Output() eventUpdate: EventEmitter<Object> = new EventEmitter<Object>();
  
  constructor() {
    
  }

  ngOnInit() {

  }

  setEventStatus(status, event) {

    switch (status) {
      case 'going':
        this.eventUpdate.emit({status: 'going', eventData: event});
        break;
      
      case 'ignore':
        this.eventUpdate.emit({status: 'ignore', eventData: event});
        break;
      
      default:
        break;  
    }
  }
}
