import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  pages: any[] = ["about", "not about"]
  // images: any[] = ["../assets/test-img/ani1.jpeg", "../assets/test-img/ani2.jpeg"]
  images: any[] = [{
    url: "../assets/test-img/ani1.jpeg",
    name: "animal1"
  },
  {
    url: "../assets/test-img/ani2.jpeg",
    name: "animal2"
  },
  {
    url: "../assets/test-img/fish.jpg",
    name: "a fish"
  }]
}
