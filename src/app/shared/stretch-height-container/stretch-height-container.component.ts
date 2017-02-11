import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-stretch-height-container',
  template: '<ng-content></ng-content>',
  styles: [`:host { overflow-y: scroll; display: block; }`]
})
export class StretchHeightContainerComponent implements OnInit {

  constructor(private el: ElementRef) {
  }


  ngOnInit() {
  }

  ngAfterViewChecked(){
      const screenHeight = window.screen.height;
      const offset = this.el.nativeElement.getBoundingClientRect().top;
      const targetHeight = screenHeight - offset;

      this.el.nativeElement.style.height = targetHeight + 'px';
  }
  
}
