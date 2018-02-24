import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {
  eventDetails: Event;
  eventDescription: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula erat a augue tristique, vitae vestibulum massa gravida. Fusce nec est id sapien pretium imperdiet. Praesent eu mauris ac metus vehicula hendrerit vel sit amet odio. Pellentesque sed ullamcorper ipsum. Curabitur dictum tincidunt commodo.';
  charLimit: number = 110;
  showMoreBtn: string = 'Show more';
  toggleDescriptionIcon: string = 'arrow-down';
  isMore: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.eventDetails = this.navParams.data.event;
    console.log(this.eventDetails)
  }

  ionViewDidLoad() {

  }

  showMore() {
    this.isMore = !this.isMore;
    console.log(this.isMore)
    if (this.isMore) {
      this.charLimit = this.eventDescription.length;
      this.showMoreBtn = 'Show less ';
      this.toggleDescriptionIcon = 'arrow-up';
    } else {
      this.charLimit = 110;
      this.showMoreBtn = 'Show more ';
      this.toggleDescriptionIcon = 'arrow-down';
    }
  }

}
