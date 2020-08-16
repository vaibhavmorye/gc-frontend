import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostComponent } from './post/post.component';
import {SinglePostComponent} from './single-post/single-post.component'
import {HomeComponent} from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { CreatePostComponent } from './create-post/create-post.component';



const routes: Routes = [ { path: 'post/:id', component: PostComponent },
{ path: 'list/:type', component: PostListComponent },
{ path: 'create', component: CreatePostComponent },
{ path: 'home', component: HomeComponent },
{path: 'p', component:SinglePostComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
