import { environment } from './../../shared/environment';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';


@IonicPage()
@Component({
  selector: 'page-covidmap',
  templateUrl: 'covidmap.html',
})
export class CovidmapPage implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CovidmapPage');
  }
  ngOnInit() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: 13,
        center: [this.lng, this.lat]
    });
    
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
