import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() cake: object;

  constructor() { }

  ngOnInit() {
  }

  calcAvgRating(cake: any): any {
    let count = 0;
    for (let post of cake.posts) {
      count += post.rating;
    }
    if (cake.posts.length == 0) return "no reviews yet";
    let num = count/cake.posts.length;
    return Math.round((num)*100)/100 + " stars";
  }
}
