import { Component, OnInit } from '@angular/core';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';
import {PostsServiceService} from "../services/posts-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ng-best-dad-jokes';
  posts: Post[] = [];
  isLoading: boolean = false;

  constructor(private postsServiceService: PostsServiceService) { }

  ngOnInit(): void {
      this.isLoading = true;
      this.postsServiceService.getData().subscribe(resolve =>
      this.posts = resolve);
      this.isLoading = false;
  }

}
