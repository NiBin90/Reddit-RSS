import { Component } from '@angular/core';

import { SettingPage } from '../setting/setting';
import { ContactPage } from '../contact/contact';
import { RedditPage } from '../reddit/reddit';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RedditPage;
  tab2Root = SettingPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
