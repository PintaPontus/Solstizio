import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  @Input() imgs: string[] = [];
  slideIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
