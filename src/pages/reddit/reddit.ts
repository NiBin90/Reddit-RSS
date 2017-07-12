import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { RedditService } from '../../app/service/reddit.service';

@Component({
  selector: 'page-reddit',
  templateUrl: 'reddit.html'
})
export class RedditPage {
  items: any[];
  category: string;
  limit: any;
  constructor(public navCtrl: NavController, private redditservice: RedditService) {
    this.getDefault();
  }
  getDefault(){
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
  ngOnInit(){
      this.getPosts(this.category, this.limit);
  }
  getPosts(category, limit){
    this.redditservice.getPosts(category, limit).subscribe(response=>{
        this.items = response.data.children;
        console.log(this.items);
    });
  }
  changeCategory(){
    this.getPosts(this.category, this.limit);
  }
  viewItem(item){
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }
}
