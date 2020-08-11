import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  
  }

  userTestStatus = [
    { "id": 0, "name": "Available", "imageUrl":["https://i.pinimg.com/564x/47/88/94/478894386b13f6a6ee4e1ec695d8d20d.jpg", "https://static.dribbble.com/users/1209980/screenshots/7081431/media/eccb05967ce9ec599a8fb8428cf433f9.jpg", "https://3.bp.blogspot.com/-_efE_vwS2A0/UjL4caI0FAI/AAAAAAAAGzE/6JWyb1D4nAQ/s1600/Ganesh+Charurthi+Decoration+idea+in+a+shop.JPG" ]},
    { "id": 1, "name": "Ready","imageUrl":["https://i.pinimg.com/564x/47/88/94/478894386b13f6a6ee4e1ec695d8d20d.jpg", "https://gc-host.s3.ap-south-1.amazonaws.com/asset/IMG_20150917_104618_HDR.jpg"  ]},
    { "id": 2, "name": "Started","imageUrl":["https://i.pinimg.com/564x/47/88/94/478894386b13f6a6ee4e1ec695d8d20d.jpg", "https://gc-host.s3.ap-south-1.amazonaws.com/asset/IMG_20150917_134149_HDR.jpg"]  },
  ];
}
