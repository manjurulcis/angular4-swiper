"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var SwiperComponent = (function () {
    function SwiperComponent(platformId, elementRef, ngZone) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.slideCount = 0;
        this.initialized = false;
        this.shouldInitialize = true;
    }
    Object.defineProperty(SwiperComponent.prototype, "initialize", {
        set: function (value) {
            this.shouldInitialize = this.initialized ? false : value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    SwiperComponent.prototype.ngAfterViewInit = function () {
        if (this.shouldInitialize && common_1.isPlatformBrowser(this.platformId)) {
            this.setup();
        }
    };
    SwiperComponent.prototype.setup = function () {
        if (!this.Swiper) {
            this.swiperWrapper = this.elementRef.nativeElement.querySelector('.swiper-wrapper');
            this.slideCount = this.swiperWrapper.childElementCount;
            this.Swiper = new Swiper(this.elementRef.nativeElement.querySelector('swiper > div'), this.config);
            this.shouldInitialize = false;
        }
    };
    SwiperComponent.prototype.ngAfterViewChecked = function () {
        if (common_1.isPlatformBrowser(this.platformId) && this.shouldInitialize) {
            this.setup();
        }
        if (common_1.isPlatformBrowser(this.platformId) && this.swiperWrapper && this.slideCount !== this.swiperWrapper.childElementCount) {
            this.slideCount = this.swiperWrapper.childElementCount;
            this.Swiper.update();
        }
    };
    return SwiperComponent;
}());
SwiperComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'swiper',
                template: "<div [ngClass]=\"{'swiper-container': config?.containerModifierClass === undefined }\">\n                    <ng-content></ng-content>\n                </div>",
                styles: [':host {display: block;}', ':host > div {width: 100%;height: 100%;}']
            },] },
];
/** @nocollapse */
SwiperComponent.ctorParameters = function () { return [
    { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
    { type: core_1.ElementRef, },
    { type: core_1.NgZone, },
]; };
SwiperComponent.propDecorators = {
    'config': [{ type: core_1.Input },],
    'initialize': [{ type: core_1.Input, args: ['initialize',] },],
};
exports.SwiperComponent = SwiperComponent;
//# sourceMappingURL=swiper.component.js.map