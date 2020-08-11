import { Component, OnInit, Input } from '@angular/core';
import {PostDetails} from "../models/PostDetails"
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postDetails:PostDetails;
  
  constructor() { }

  ngOnInit(): void {
  }

}
