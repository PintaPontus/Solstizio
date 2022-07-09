import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.scss']
})

export class SlideshowComponent implements OnInit {
    @Input() slides: Slide[] = [];
    @Input() delay: number = 5000;
    slideIndex: number = 0;
    private clock: NodeJS.Timer | undefined;

    constructor() {
    }

    ngOnInit(): void {
        this.startCounter();
    }

    incrementCounter() {
        this.slideIndex = (this.slideIndex + 1) % this.slides.length;
    }

    startCounter() {
        this.clock = setInterval(() => {
            this.incrementCounter();
        }, this.delay);
    }

    nextSlide() {
        clearInterval(this.clock);
        this.clock = setInterval(() => {
            this.incrementCounter();
        }, this.delay);
        this.slideIndex = (this.slideIndex + 1) % this.slides.length;
    }

    previousSlide() {
        clearInterval(this.clock);
        this.clock = setInterval(() => {
            this.incrementCounter();
        }, this.delay);
        this.slideIndex = (this.slideIndex + this.slides.length - 1) % this.slides.length;
    }

}

export interface Slide {
    title: string,
    backgroundUrl: string,
}
