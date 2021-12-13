import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';
import {PostsServiceService} from "../services/posts-service.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Post[] = []
  post?: Post;
  id!: Number;
  slug!: String
  isLoading: Boolean = false
  constructor(private route: ActivatedRoute, private postsService: PostsServiceService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.postsService.getData().subscribe(resolve => {
        this.posts = resolve
        this.post = this.posts.find((post) => post.slug === params['slug']);
        this.slug = params['slug'];
      });
      this.isLoading = false;
    })
    this.post = postsMock.find((post) => post.id === +this.route.snapshot.params['slug']);
  }
}
