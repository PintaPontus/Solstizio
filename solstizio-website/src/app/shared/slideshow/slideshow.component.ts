import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})

export class SlideshowComponent implements OnInit {
  @Input() slides: Slide[] = [];
  @Input() delay: number = 1000;
  slideIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startCounter();
  }

  startCounter(){
    setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % this.slides.length;
    }, this.delay);
  }

}

export interface Slide {
  title: string,
  backgroundUrl: string,
}
