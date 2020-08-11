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
    { "id": 0, "name": "Available", "imageUrl":"https://i.pinimg.com/564x/47/88/94/478894386b13f6a6ee4e1ec695d8d20d.jpg" },
    { "id": 1, "name": "Ready","imageUrl":"https://i.pinimg.com/564x/47/88/94/478894386b13f6a6ee4e1ec695d8d20d.jpg"  },
    { "id": 2, "name": "Started","imageUrl":"https://i.pinimg.com/564x/47/88/94/478894386b13f6a6ee4e1ec695d8d20d.jpg"  },
  ];
}
