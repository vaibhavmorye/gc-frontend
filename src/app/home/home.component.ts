import { Component, OnInit } from '@angular/core';
import{PostListResponse} from '../models/PostListRespons';
import {PostDetails} from '../models/PostDetails';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public sortBy:string="default";
  public postList: PostDetails[];
  total_count = 0;
  
  /**pagination parameters
   *
   */

  collection = { count: 0, data: [] };
  config :any = {
    itemsPerPage: 5,
    currentPage: 0,
    totalItems: 0
  };;

  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
      previousLabel: '<--',
      nextLabel: '-->',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };

  constructor(private http: HttpClient) {
    this.getPost();
    this.getCount();
  }

  ngOnInit(): void {
    this.getCount();
  }

  getPost(){
    var sortby = "";
    
  

    this.http.get<PostListResponse>("//localhost:8080/morya/posts?pageNo="+this.config.currentPage).subscribe(data=>{
      this.postList = data.posts;
      this.collection.data= data.posts;
      console.log("data:",   data);
    });

  }

  getCount(){
    this.http.get<number>("//localhost:8080/morya/pcnt").subscribe(data=>{
      console.log("count data: ", data);
      this.collection.count = data;
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: data
      };
    })
  }
  onPageChange(event){
    this.config.currentPage = event;
    console.log("event :", event);
    this.getPost();
  }


}
