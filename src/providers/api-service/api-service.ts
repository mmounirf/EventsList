import { Event } from './../../models/event';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class ApiServiceProvider {
  API_URL = 'https://rest-api-5ba39.firebaseio.com/events.json';
  constructor(public httpClient: HttpClient, public alertController: AlertController ) {

  }

  getEvents() {
    return this.httpClient.get<Event[]>(this.API_URL);
  };

  restErrorHandling(error) {
    let alertModal = this.alertController.create({
      title: `Error ${error.status}`,
      subTitle: `Failed to complete your request, the server responded with <strong>'Error ${error.status} ${error.statusText}'</strong>`,
      buttons: ['OK']
    });
    alertModal.present();
  }
}
