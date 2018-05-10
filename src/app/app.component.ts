import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loading = true;
  anon: boolean;
  user: any;

  constructor(
    private router: Router
    // @todo inject authService
  ) { }
  
  ngOnInit() {
    // @todo observe authService.userChange$ and update loading/anon/user
  }
}
