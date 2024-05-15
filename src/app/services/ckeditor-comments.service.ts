import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CKEditorCommentsService {
  constructor(private readonly http: HttpClient) {}

  addCommentThread(data: any): Observable<any> {
    // return this.http.post('response_comments/add/thread', data);
    return of(data);
  }

  updateCommentThread(data: any): Observable<any> {
    // return this.http.put('response_comments/update/thread', data);
    return of(data);
  }

  resolveCommentThread(data: any): Observable<any> {
    // return this.http.put('response_comments/resolve/thread', data);
    return of(data);
  }

  reopenCommentThread(data: any): Observable<any> {
    // return this.http.put('response_comments/reopen/thread', data);
    return of(data);
  }

  removeCommentThread(data: any): Observable<any> {
    // return this.http.delete('response_comments/delete/thread', { body: data });
    return of(data);
  }

  addComment(data: any): Observable<any> {
    // return this.http.post('response_comments/add/comment', data);
    return of(data);
  }

  updateComment(data: any): Observable<any> {
    // return this.http.put('response_comments/update/comment', data);
    return of(data);
  }

  removeComment(data: any): Observable<any> {
    // return this.http.delete('response_comments/delete/comment', { body: data });
    return of(data);
  }

  getCommentThread(data: any): Observable<any> {
    // return this.http.post('response_comments/get/thread', data);
    return of(data);
  }

  getSuggestion(data: any): Observable<any> {
    // return this.http.post('response_comments/get/suggestion', data);
    return of(data);
  }

  addSuggestion(data: any): Observable<any> {
    // return this.http.post('response_comments/add/suggestion', data);
    return of(data);
  }

  updateSuggestion(data: any): Observable<any> {
    // return this.http.put('response_comments/update/suggestion', data);
    return of(data);
  }

  syncSuggestion(data: any): Observable<any> {
    // return this.http.post('response_comments/sync/suggestions', data);
    return of(data);
  }
}
