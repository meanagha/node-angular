import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 userName = 'Welcome';

  constructor(private router: Router) {}

  logout(): void {

    localStorage.removeItem('token');

    this.router.navigate(['/login']);

  }
}
