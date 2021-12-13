import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  constructor(private httpClient: HttpClient) { }

  getData() : Observable<Post[]>{
    return this.httpClient.get<Post[]>('http://localhost:3001/posts')
  }
}
