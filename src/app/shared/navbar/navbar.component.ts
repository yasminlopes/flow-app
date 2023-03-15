import { Component, OnInit } from '@angular/core';
import { NAV_ITEMS } from './model/navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isNavbarOpen: boolean = false;
  public navItems = NAV_ITEMS;

  constructor() { }

  ngOnInit(): void {}

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}
