"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typegoose_1 = require("../../typegoose");
var Virtual = (function (_super) {
    __extends(Virtual, _super);
    function Virtual() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Virtual.prototype, "virtualSubs", {
        get: function () { return undefined; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], Virtual.prototype, "dummyVirtual", void 0);
    __decorate([
        typegoose_1.prop({ ref: 'VirtualSub', foreignField: 'virtual', localField: '_id', justOne: false, overwrite: true }),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Virtual.prototype, "virtualSubs", null);
    return Virtual;
}(typegoose_1.Typegoose));
exports.Virtual = Virtual;
var VirtualSub = (function (_super) {
    __extends(VirtualSub, _super);
    function VirtualSub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typegoose_1.prop({ required: true, ref: Virtual }),
        __metadata("design:type", Object)
    ], VirtualSub.prototype, "virtual", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], VirtualSub.prototype, "dummy", void 0);
    return VirtualSub;
}(typegoose_1.Typegoose));
exports.VirtualSub = VirtualSub;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbHByb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdGVzdC9tb2RlbHMvdmlydHVhbHByb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXVEO0FBRXZEO0lBQTZCLDJCQUFTO0lBQXRDOztJQU1BLENBQUM7SUFERyxzQkFBVyxnQ0FBVzthQUF0QixjQUEyQixPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUM7OztPQUFBO0lBSDlDO1FBREMsZ0JBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7aURBQ0k7SUFHN0I7UUFEQyxnQkFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7Ozs4Q0FDM0Q7SUFDbEQsY0FBQztDQUFBLEFBTkQsQ0FBNkIscUJBQVMsR0FNckM7QUFOWSwwQkFBTztBQVFwQjtJQUFnQyw4QkFBUztJQUF6Qzs7SUFNQSxDQUFDO0lBSkc7UUFEQyxnQkFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUM7OytDQUNWO0lBRzdCO1FBREMsZ0JBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NkNBQ0o7SUFDekIsaUJBQUM7Q0FBQSxBQU5ELENBQWdDLHFCQUFTLEdBTXhDO0FBTlksZ0NBQVUifQ==