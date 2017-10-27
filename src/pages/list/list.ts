import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage implements OnInit{

  httpResponse: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
  }

  ngOnInit(): void {
    //https://developers.themoviedb.org/3/movies/get-popular-movies
    this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=7ad22c0094c9b92652d64ea897f03a7b&language=en-US&page=1')
      .subscribe(response => this.httpResponse = response);
  }

  goToMovie(movieId){
    console.log(movieId);
  }
}
