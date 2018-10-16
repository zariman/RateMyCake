import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newCake: object;
  newPost: Array<object> = [];
  cake: object;
  cakes: any;
  cakeData: object;
  postData: Array<object>;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getCakesFromService();
    this.newCake = { baker_name: "", image_url: "" };
  }

  onCakeSubmit(): void {
    let observable = this._httpService.createCake(this.newCake);
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.cakeData = data;
    });
    this.newCake = { baker_name: "", image_url: "" }
    this.getCakesFromService();
  }

  onCommentSubmit(cake_id: any, index: number): void {
    let observable = this._httpService.addPost(cake_id, this.newPost[index]);
    observable.subscribe(data => {
      console.log("Got our tasks!", data);
      if (data['message'].errors) { this.newPost[index]['errors'] = data['message'].errors; console.log(this.newPost[index]); }
      else {
        this.onImageClick(cake_id);
      }
    });
    this.newPost[index] = { comment: "", rating: undefined };
  }

  onImageClick(cake_id: any): void {
    let observable = this._httpService.getCake(cake_id);
    observable.subscribe(data => this.cake = data['data']);
  }

  getCakesFromService(): void {
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      this.cakes = data['data'];
      for (let cake of this.cakes) {
        this.newPost.push({ comment: "", rating: undefined });
      }
    });
  }
}
