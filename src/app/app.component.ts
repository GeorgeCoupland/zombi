import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading = true;
  anon: boolean;
  user: any;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }
  
  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.loading = false;
      this.user = user;
      this.anon = !user;
    });
  }

  handleLogout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/login']));
  }

}