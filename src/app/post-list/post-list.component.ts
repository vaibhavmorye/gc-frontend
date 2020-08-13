import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  
  
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

  collection = { count: 60, data: [] };
  config = {
    id: 'custom',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: this.collection.count
  };


  constructor() {
    
  }

  ngOnInit(): void {

  }

  userTestStatus = [

    { "id": 0, "name": "Available", "imageUrl": ["https://i.pinimg.com/564x/47/88/94/478894386b13f6a6ee4e1ec695d8d20d.jpg", "https://static.dribbble.com/users/1209980/screenshots/7081431/media/eccb05967ce9ec599a8fb8428cf433f9.jpg", "https://3.bp.blogspot.com/-_efE_vwS2A0/UjL4caI0FAI/AAAAAAAAGzE/6JWyb1D4nAQ/s1600/Ganesh+Charurthi+Decoration+idea+in+a+shop.JPG"] },
    { "id": 1, "name": "Ready", "imageUrl": ["https://i.pinimg.com/564x/47/88/94/478894386b13f6a6ee4e1ec695d8d20d.jpg", "https://gc-host.s3.ap-south-1.amazonaws.com/asset/IMG_20150917_134149_HDR.jpg"] },
    { "id": 2, "name": "Started", "imageUrl": ["https://gc-host.s3.ap-south-1.amazonaws.com/asset/IMG_20150917_134149_HDR.jpg"] },
  ];




  onPageChange(event){
    console.log(event);
    this.config.currentPage = event;
  }

}
