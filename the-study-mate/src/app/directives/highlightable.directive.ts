import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightable]'
})
export class HighlightableDirective {

  @Input() appHighlightable = 'shadow';

  constructor(private el: ElementRef<HTMLElement> , private renderer: Renderer2) {
    console.log('HighlightableDirective');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.addClass(this.el.nativeElement, this.appHighlightable);
    // this.renderer.addClass(this.el.nativeElement, 'shadow');
    // this.el.nativeElement.classList.add('shadow');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeClass(this.el.nativeElement, this.appHighlightable);
    // this.renderer.removeClass(this.el.nativeElement, 'shadow');
    // this.el.nativeElement.classList.remove('shadow');
  }





}
