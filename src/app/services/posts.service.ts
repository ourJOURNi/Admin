import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  BACKEND_URL = environment.url;
  posts$ = new BehaviorSubject([]);

  constructor(
    private http: HttpClient
    ) { }

    getPosts() {
      return this.http.get(`${this.BACKEND_URL}/api/admin/posts`);
    }

    getReportedComments() {
      return this.http.get(`${this.BACKEND_URL}/api/admin/posts/reported-comments`);
    }

    getUnverifiedPosts() {
      return this.http.get(`${this.BACKEND_URL}/api/admin/posts/verify`);
    }

    deletePost(_id) {
      return this.http.delete(`${this.BACKEND_URL}/api/admin/posts/delete-post/${_id}`);
    }

    deleteComment(_id, commentID) {
      return this.http.delete(`${this.BACKEND_URL}/api/admin/posts/delete-comment/${_id}/${commentID}`);
    }

    deleteReportedComment(_id, commentID) {
      return this.http.delete(`${this.BACKEND_URL}/api/admin/posts/delete-reported-comment/${_id}/${commentID}`);
    }
}
