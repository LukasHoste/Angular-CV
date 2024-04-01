import { Directive, Renderer2, ElementRef } from '@angular/core';


@Directive({
  selector: '[appBlockScroll]',
  standalone: true
})
export class BlockScrollDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  ngOnDestroy() {
    this.renderer.setStyle(document.body, 'overflow', 'auto');
  }

}
