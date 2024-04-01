import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { PanelComponent } from './panel/panel.component';
import { NavbarComponent } from './navbar/navbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AboutComponent, PanelComponent, CommonModule, RouterLink, MatToolbarModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-portfolio';
}
