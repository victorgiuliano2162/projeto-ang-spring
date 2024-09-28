import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {}

  login(data: any): Observable<any> {
    console.log("service")
    return this.httpClient.post<any>(`${this.apiUrl}/`, data);
  }
}
