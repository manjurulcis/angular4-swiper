import { ElementRef, AfterViewChecked, AfterViewInit, NgZone } from '@angular/core';
export declare class SwiperComponent implements AfterViewChecked, AfterViewInit {
    private platformId;
    private elementRef;
    private ngZone;
    config: any;
    initialize: boolean;
    Swiper: any;
    private swiperWrapper;
    private slideCount;
    private initialized;
    private shouldInitialize;
    constructor(platformId: Object, elementRef: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    setup(): void;
    ngAfterViewChecked(): void;
}
