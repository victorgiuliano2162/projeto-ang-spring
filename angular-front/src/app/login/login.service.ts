import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = '';

  constructor(private httpClient: HttpClient) {}

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, credentials);
  }
}
