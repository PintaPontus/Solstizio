import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  @Input() imgs: string[] = [];
  @Input() delay: number = 5000;
  slideIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startCounter();
  }

  startCounter(){
    setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % this.imgs.length;
    }, this.delay);
  }

}
