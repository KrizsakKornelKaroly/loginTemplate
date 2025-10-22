import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from "@angular/router";
import { NavItem } from '../../interfaces/navitem';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  navItems: NavItem[] = [];

  ngOnInit(): void {
    this.setupMenu();
  }

  setupMenu() {
    this.navItems = [
      {
        name: 'Home', 
        url: '/home', 
        icon: 'bi-house-door'
      },
      { 
        name: 'Login', 
        url: '/login', 
        icon: 'bi-box-arrow-in-right' 
      },
      { 
        name: 'Registration', 
        url: '/registration', 
        icon: 'bi-person-plus' 
      }

    ]
  }
}
