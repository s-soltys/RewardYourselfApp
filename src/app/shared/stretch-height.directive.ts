import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStretchHeight]'
})
export class StretchHeightDirective {
  constructor(private el: ElementRef) {
  }

  ngAfterViewChecked(){
      const screenHeight = window.screen.height;
      const offset = this.el.nativeElement.getBoundingClientRect().top;
      const targetHeight = screenHeight - offset;

      this.el.nativeElement.style.height = targetHeight + 'px';
  }
}
