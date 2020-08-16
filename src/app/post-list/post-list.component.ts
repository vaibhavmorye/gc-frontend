import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{PostListResponse} from '../models/PostListRespons';
import {PostDetails} from '../models/PostDetails';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit { 
  
  public sortBy:string="default";
  public postList: PostDetails[];
  total_count = 0;
  
  /**pagination parameters
   *
   */

  collection = { count: 0, data: [] };
  config :any = {
    itemsPerPage: 5,
    currentPage: 1,
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
    
    if (this.sortBy != "default"){
      sortby =  "&sortby="+this.sortBy;
    }

    this.http.get<PostListResponse>("//localhost:8080/morya/posts?pageNo="+this.config.currentPage+sortby).subscribe(data=>{
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
    console.log("event :", event);
    this.getPost();
  }

}
