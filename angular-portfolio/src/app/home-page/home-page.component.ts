import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { PanelComponent } from '../panel/panel.component';
import { BlockScrollDirective } from '../block-scroll.directive';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, PanelComponent, BlockScrollDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
