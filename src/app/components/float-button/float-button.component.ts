import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.scss']
})
export class FloatButtonComponent implements OnInit {
  buttonIsVisible = false;
  MAX_SCROLL_HIDDEN_BUTTON = 200;
  constructor() {
  }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  doSomethingOnWindowsScroll(): void {
    this.buttonIsVisible = window.scrollY > this.MAX_SCROLL_HIDDEN_BUTTON;
    // console.log('evento scroll' , window.scrollY );
  }

  floatButtonClick(): void {
    console.log('Float Button');
  }
}
