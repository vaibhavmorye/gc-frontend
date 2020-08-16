import { Component, OnInit, Input } from '@angular/core';
import {PostDetails} from "../models/PostDetails"
import { faHeart,faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  sfaHeart = faHeart;
  sfahandholdingUSD= faHandHoldingUsd;

  @Input() postDetails:PostDetails;
  
  constructor(private cookieService: CookieService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  vote(){
   var cookieName ="gc_vote" ;
   var cookie = this.cookieService.get(cookieName);
    if (cookie.includes(this.postDetails.id.toString())){ 
      cookie = cookie + " "+ this.postDetails.id.toString();   
      this.cookieService.set(cookieName, cookie);
      this.updateVote()
      return false;
    }
   console.log("cookies : ", cookie);
   if (cookie == ''){
    this.cookieService.set(cookieName, this.postDetails.id.toString() );
    return false;
   }
 
   return false;
  }

  updateVote(){
    this.http.get<number>("//localhost:8080/morya/uv?id="+this.postDetails.id).subscribe(data=>{
      this.postDetails.vote = data;
    });
  }

}
