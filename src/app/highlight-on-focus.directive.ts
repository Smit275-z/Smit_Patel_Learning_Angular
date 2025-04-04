import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  /**
   * Color to apply when the element has focus.
   * Usage in the template: [appHighlightOnFocus]="'lightgreen'"
   */
  @Input('appHighlightOnFocus') highlightColor: string = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('focus')
  onFocus() {
    this.highlight(this.highlightColor);
  }

  @HostListener('blur')
  onBlur() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
