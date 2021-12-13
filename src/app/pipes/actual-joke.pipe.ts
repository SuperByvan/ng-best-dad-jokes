import { Pipe, PipeTransform } from '@angular/core';
import {Post} from "../models/post.interface";

@Pipe({
  name: 'actualJoke'
})
export class ActualJokePipe implements PipeTransform {

  transform(jokes: Post[], slug: String): Post[] {
    return jokes.filter(j => j.slug != slug);
  }

}
