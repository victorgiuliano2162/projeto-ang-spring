import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

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

  loadById(id: string) {
    return this.httpClient.get<User>(`${this.apiUrl}/${id}`);
  }


}
