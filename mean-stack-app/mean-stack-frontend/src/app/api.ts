// src/app/api.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../config/config'; // Adjust path if necessary

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  // Inject the HttpClient
  constructor(private http: HttpClient) { }

  // Function to hit your Express server's root route
  getHelloMessage(): Observable<string> {
    // This request goes to http://localhost:3000
    return this.http.get<string>(this.apiUrl, { responseType: 'text' as 'json' }); 
  }
}
