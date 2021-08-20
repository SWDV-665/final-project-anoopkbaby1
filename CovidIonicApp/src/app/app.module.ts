import { CovidmapPage } from './../pages/covidmap/covidmap';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { baseURL } from '../shared/baseurl';
import { MainPage } from '../pages/mainPage/mainPage';
import { TabsPage } from '../pages/nav/navigations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    MyApp,
    MainPage,
    TabsPage,
    CovidmapPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2SearchPipeModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    TabsPage,
    CovidmapPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    DatePipe,
    ProcessHttpmsgProvider,
    { provide: 'BaseURL', useValue: baseURL }
  ]
})
export class AppModule {}
