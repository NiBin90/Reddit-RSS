import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditPage } from '../reddit/reddit';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  category: string;
  limit: any;
  constructor(public navCtrl: NavController) {
    this.getDefault();
  }
  getDefault() {
    if (localStorage.getItem('category') != null) {
      this.category = localStorage.getItem('category');
    } else {
      this.category = 'sports';
    }
    if (localStorage.getItem('limit') != null) {
      this.limit = localStorage.getItem('limit');
    } else {
      this.limit = 10;
    }
  }
  setDefault() {
    localStorage.setItem('category', this.category);
    localStorage.setItem('limit', this.limit);
    this.navCtrl.push(RedditPage);
    console.log('Save Changes Succeed!');
  }
}
