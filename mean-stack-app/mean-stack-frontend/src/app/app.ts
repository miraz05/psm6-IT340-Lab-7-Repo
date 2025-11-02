import { Component, OnInit, signal } from '@angular/core'; // Import OnInit
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api'; // Import your ApiService
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, etc.

@Component({
  selector: 'app-root',
  // Add CommonModule and ApiService to imports for standalone components
  imports: [CommonModule], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// Implement the OnInit interface
export class App implements OnInit {
  protected readonly title = signal('mean-stack-frontend');
  
  // 1. Create a signal to hold the message from the backend
  protected helloMessage = signal('Connecting to Express Backend...');

  // 2. Inject the ApiService
  constructor(private apiService: ApiService) {}

  // 3. Implement ngOnInit to call the service
  ngOnInit(): void {
    this.apiService.getHelloMessage().subscribe({
      next: (data) => {
        // Set the signal value when data is received (e.g., "Hello MEAN Stack!")
        this.helloMessage.set(data);
      },
      error: (err) => {
        console.error('Error fetching message:', err);
        // Set an error message if the connection fails
        this.helloMessage.set('ERROR: Could not connect to Express Backend.');
      }
    });
  }
}
