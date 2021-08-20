import { CovidmapPage } from '../covidmap/covidmap';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'page-home',
  templateUrl: 'main-View.html'
})
export class MainPage implements OnInit {
  posts: any;
  term: string;
  country='';
  date=new Date();
  slideOpts = {
  initialSlide: 1,
  speed: 400
};

yesterday = new Date(Date.now() - 1728e5)
 latest_date =this.datepipe.transform(this.yesterday, 'yyyy-MM-dd');

  constructor(public navCtrl: NavController, public http: Http,public datepipe: DatePipe) {
;
}
  ngOnInit() {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Content-Type', 'application/json');

    const options = new RequestOptions({ headers });
    this.http.get('https://covid-api.com/api/reports?date='+this.latest_date,options).map(res => res.json()).subscribe(data => {
    this.posts = data.data;
    console.log( this.yesterday);
    console.log( this.posts);
    });
  }

  covidmap(){
    this.navCtrl.push(CovidmapPage);
    }
}
