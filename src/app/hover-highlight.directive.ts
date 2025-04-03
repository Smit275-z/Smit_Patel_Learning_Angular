import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  /**
   * The color to use for highlighting the element on hover.
   * Usage in template: [appHoverHighlight]="'lightblue'" or just appHoverHighlight (for default).
   */
  @Input('appHoverHighlight') highlightColor: string = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    // Change the background color on hover
    this.el.nativeElement.style.backgroundColor = color;
  }
}
