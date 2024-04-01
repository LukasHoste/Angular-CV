import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  constructor(private router: Router) {}

  pages: any[] = ["about", "not about"]
  // images: any[] = ["../assets/test-img/ani1.jpeg", "../assets/test-img/ani2.jpeg"]
  images: any[] = [{
    url: "../assets/test-img/ani1.jpeg",
    name: "about"
  },
  {
    url: "../assets/test-img/ani2.jpeg",
    name: "about"
  },
  {
    url: "../assets/test-img/fish.jpg",
    name: "about"
  }]

  navigation(name: String) : void {
    // console.log(name)
    this.router.navigate(['/About'])
  }
}
