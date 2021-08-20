import { Component } from '@angular/core';

import { MainPage } from '../mainPage/mainPage';

@Component({
  templateUrl: 'navigations.html'
})
export class TabsPage {

  tab1Root = MainPage;

  constructor() {

  }
}
