import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileManagerService {
  readonly server: string = 'http://localhost:49431/api';

  constructor(private readonly http: HttpClient) {}

  uploadFile(formData: FormData): Observable<any> {
    return this.http.post(`${this.server}/excel_parser/htmlcontent`, formData);
  }
}
