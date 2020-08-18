import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageCompressService, IImage,  } from 'ng2-image-compress';
import{HttpHeaders} from '@angular/common/http'
import { NgxSpinnerService } from "ngx-spinner"; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {PostDetails} from '../models/PostDetails';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  selectedImage: any;
  processedImages: any = [];

  selectedFiles: FileList;
  progressInfo = [];
  messages = '';
  showTitle: boolean = false;
  postDetails:any;
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)], ),
    district: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(40)], ),
    wadi: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(40)], ),
    description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(400)]),
    file1: new FormControl('', [Validators.required,]),
    fileSource: new FormControl('', [Validators.required])
  });
   

  constructor(private http: HttpClient, private imgCompressService: ImageCompressService,
     private sanitizer: DomSanitizer,private SpinnerService: NgxSpinnerService,private router: Router) {
  }

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event: any) {
    let images: Array<IImage> = [];
    if (event.target.files.length > 3) {
      alert("Max 3 file allowed per post");
      return;
    } else {
      if (event.target.files && event.target.files.length) {
        this.selectedFiles = event.target.files;
        ImageCompressService.filesArrayToCompressedImageSource(Array.from(event.target.files)).then(observableImages => {
          observableImages.subscribe((image) => {
            images.push(image);
          }, (error) => {
            console.log("Error while converting");
          }, () => {
            this.showTitle = true;
            this.getCompressImages(images);   
          });
        });
      }
    }
  }


  getCompressImages(images: any) {
    images.forEach(element => {
      this.processedImages.push( element.compressedImage);
    });
  }

  submit() {
    this.SpinnerService.show(); 
    var images = new Array();
    console.log(this.processedImages);
    for (let index = 0; index < this.processedImages.length; index++) {
      images.push(this.processedImages[index].imageDataUrl);
    }
    

    var createPostDTO = {
      name : this.myForm.value.name,
       city: this.myForm.value.city,
       district: this.myForm.value.district,
       wadi: this.myForm.value.wadi,
       description: this.myForm.value.description,
      imageList : images  
    }

    console.log(createPostDTO);
    
  var  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});
  
    this.http.post<PostDetails>('//localhost:8080/morya/upload', createPostDTO, {headers: headers})
      .subscribe(res => {    
        this.postDetails = res;
        this.SpinnerService.hide(); 
        this.router.navigate(['p',{ id: this.postDetails.id}]);        
      });
  }

  
}
