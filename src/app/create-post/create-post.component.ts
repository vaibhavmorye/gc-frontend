import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageCompressorService  } from '../image-compressor.service';
import { Observable } from 'rxjs';
import { EMPTY } from 'rxjs';
import { map, expand } from 'rxjs/operators';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  
  imageSrc: string[] = [];
  imagefiles: FileList[];
  compressedImages = [];
   image1:FileList;
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    city: new FormControl('', [Validators.required, Validators.minLength(3)]),
    district: new FormControl('', [Validators.required, Validators.minLength(3)]),
    wadi: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description:new FormControl('', [Validators.required, Validators.minLength(3)]),
    files: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient, private compressor: ImageCompressorService ,private sanitizer : DomSanitizer) {
  
   }

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event) {
    console.log(event);
    if (event.target.files.length > 3) {
      alert("Max 3 file allowed per post");
     
      return;
    } else {
      if (event.target.files && event.target.files.length) {
        var compressedImages = [];
         this.imagefiles = event.target.files;

         for (let index = 0; index < this.imagefiles.length; index++) {
          const element = this.imagefiles[index];
          console.log("image :", element);
        console.log("image[0] :",element[0]);
        }
        // for ( this.image1 of this.imagefiles) {

         
           
        //   console.log("image :", this.image1);
        //   console.log("image[0] :",this.image1[0]);

        //   const compress = this.recursiveCompress( this.image1[0], 0, this.image1 ).pipe(
        //     expand(res => {
        //       return res.index > res.array.length - 1
        //         ? EMPTY
        //         : this.recursiveCompress( this.image1[res.index], res.index, this.image1 );
        //     }),
        //   );
        //   compress.subscribe(res => {
        //     if (res.index > res.array.length - 1) {
        
        
        //     //Code block after completing all compression
        //       console.log('Compression successful ' + this.compressedImages);
        //     }
        //   });
        // }
      
 
        
        
    
       }
     }
  }


  recursiveCompress = (image: File, index, array) => {
    return this.compressor.compress(image).pipe (
      map(response => {

      //Code block after completing each compression
        console.log('compressed ' + index + image.name);
        this.compressedImages.push(response);
        return {
          data: response,
          index: index + 1,
          array: array,
        };
      }),
    );
  }

  submit() {


    this.http.post('http://localhost:8001/upload.php', this.myForm.value)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  }

}
