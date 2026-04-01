import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-collapse-navbar',
  imports: [NgbCollapse, RouterLink],
  templateUrl: './collapse-navbar.html',
  styleUrl: './collapse-navbar.css',
})
export class CollapseNavbar {
  	isMenuCollapsed = true;

}
