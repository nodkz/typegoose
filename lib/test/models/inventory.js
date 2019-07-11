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
var Scooter = (function (_super) {
    __extends(Scooter, _super);
    function Scooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", String)
    ], Scooter.prototype, "makeAndModel", void 0);
    return Scooter;
}(typegoose_1.Typegoose));
exports.Scooter = Scooter;
var Beverage = (function (_super) {
    __extends(Beverage, _super);
    function Beverage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typegoose_1.prop({ default: false }),
        __metadata("design:type", Boolean)
    ], Beverage.prototype, "isSugarFree", void 0);
    __decorate([
        typegoose_1.prop({ default: false }),
        __metadata("design:type", Boolean)
    ], Beverage.prototype, "isDecaf", void 0);
    return Beverage;
}(typegoose_1.Typegoose));
exports.Beverage = Beverage;
var Inventory = (function (_super) {
    __extends(Inventory, _super);
    function Inventory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typegoose_1.prop({ default: 100 }),
        __metadata("design:type", Number)
    ], Inventory.prototype, "count", void 0);
    __decorate([
        typegoose_1.prop({ default: 1.00 }),
        __metadata("design:type", Number)
    ], Inventory.prototype, "value", void 0);
    __decorate([
        typegoose_1.prop({ required: true, enum: ['Beverage', 'Scooter'] }),
        __metadata("design:type", String)
    ], Inventory.prototype, "refItemPathName", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", String)
    ], Inventory.prototype, "name", void 0);
    __decorate([
        typegoose_1.prop({ refPath: 'refItemPathName', required: true }),
        __metadata("design:type", Object)
    ], Inventory.prototype, "kind", void 0);
    return Inventory;
}(typegoose_1.Typegoose));
exports.Inventory = Inventory;
exports.ScooterModel = new Scooter().getModelForClass(Scooter);
exports.BeverageModel = new Beverage().getModelForClass(Beverage);
exports.InventoryModel = new Inventory().getModelForClass(Inventory);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3QvbW9kZWxzL2ludmVudG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw2Q0FBdUQ7QUFFdkQ7SUFBOEIsMkJBQVM7SUFBdkM7O0lBR0EsQ0FBQztJQURHO1FBREMsZ0JBQUksRUFBRTs7aURBQ3FCO0lBQ2hDLGNBQUM7Q0FBQSxBQUhELENBQThCLHFCQUFTLEdBR3RDO0FBSGEsMEJBQU87QUFLckI7SUFBK0IsNEJBQVM7SUFBeEM7O0lBTUEsQ0FBQztJQUpHO1FBREMsZ0JBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQzs7aURBQ0c7SUFHNUI7UUFEQyxnQkFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDOzs2Q0FDRDtJQUM1QixlQUFDO0NBQUEsQUFORCxDQUErQixxQkFBUyxHQU12QztBQU5hLDRCQUFRO0FBUXRCO0lBQStCLDZCQUFTO0lBQXhDOztJQWVBLENBQUM7SUFiRztRQURDLGdCQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7OzRDQUNGO0lBR3JCO1FBREMsZ0JBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NENBQ0g7SUFHckI7UUFEQyxnQkFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLEVBQUMsQ0FBQzs7c0RBQ3hCO0lBRy9CO1FBREMsZ0JBQUksRUFBRTs7MkNBQ2E7SUFHcEI7UUFEQyxnQkFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQzs7MkNBQ2Y7SUFDekMsZ0JBQUM7Q0FBQSxBQWZELENBQStCLHFCQUFTLEdBZXZDO0FBZlksOEJBQVM7QUFpQlQsUUFBQSxZQUFZLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN2RCxRQUFBLGFBQWEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFELFFBQUEsY0FBYyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMifQ==