  import { Component, OnInit } from '@angular/core';
  import { PostListResponse } from '../models/PostListRespons';
  import { PostDetails } from '../models/PostDetails';
  import { HttpClient } from '@angular/common/http';
  import { ActivatedRoute } from '@angular/router';

  @Component({
    selector: 'app-single-post',
    templateUrl: './single-post.component.html',
    styleUrls: ['./single-post.component.css']
  })
  export class SinglePostComponent implements OnInit {

    postList: any;
    order: string;
    constructor(private http: HttpClient, private route: ActivatedRoute) { }

    ngOnInit() {

      this.route.queryParams
        .subscribe(params => {
          console.log(params); // { order: "popular" }

          this.order = params.id;
          this.getPost();
          console.log(this.order); // popular
        }
        );
    }

    getPost() {
      this.http.get<PostListResponse>("//localhost:8080/morya/p?id=" + this.order).subscribe(data => {
        this.postList = data.posts;
        console.log("data:", data);
      });

    }
  }
