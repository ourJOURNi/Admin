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
  postToBeVerified$ = new BehaviorSubject([]);
  deniedPosts$ = new BehaviorSubject([]);
  reportedArchiveComments$ = new BehaviorSubject([]);
  deniedArchiveComments$ = new BehaviorSubject([]);
  reportedPosts$ = new BehaviorSubject([]);

  constructor(
    private http: HttpClient
    ) { }

    getPosts() {
      return this.http.get(`${this.BACKEND_URL}/api/admin/posts`);
    }
    getReportedComments() {
      return this.http.get(`${this.BACKEND_URL}/api/admin/posts/reported-comments`);
    }
    getReportedCommentsArchive() {
      return this.http.get(`${this.BACKEND_URL}/api/admin/posts/reported-comments-archive`);
    }
    getUnverifiedPosts() {
      return this.http.get(`${this.BACKEND_URL}/api/admin/posts/verify`);
    }
    getDeniedPosts() {
      return this.http.get(`${this.BACKEND_URL}/api/admin/posts/denied`);
    }
    verify(id) {
      return this.http.post(`${this.BACKEND_URL}/api/admin/posts/verify`, {_id: id});
    }
    deny(id) {
      return this.http.post(`${this.BACKEND_URL}/api/admin/posts/deny`, {_id: id});
    }
    deletePost(_id) {
      return this.http.delete(`${this.BACKEND_URL}/api/admin/posts/delete-post/${_id}`);
    }
    deleteComment(_id, commentID) {
      return this.http.delete(`${this.BACKEND_URL}/api/admin/posts/delete-comment/${_id}/${commentID}`);
    }
    deleteReportedComment(postID, commentID, reportedUID) {
      return this.http.post(`${this.BACKEND_URL}/api/admin/posts/delete-reported-comment/`, {postID, commentID, reportedUID});
    }
    archieveReportedComment(comment) {
      return this.http.post(`${this.BACKEND_URL}/api/admin/posts/archieve-reported-comment`, comment);
    }
}
