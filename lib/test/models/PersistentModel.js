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
var tg = require("../../typegoose");
var car_1 = require("./car");
var PersistentModel = (function (_super) {
    __extends(PersistentModel, _super);
    function PersistentModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersistentModel.prototype.getClassName = function () {
        return 'PersistentModel';
    };
    PersistentModel.getStaticName = function () {
        return 'PersistentModel';
    };
    PersistentModel.prototype.addCar = function (car) {
        if (!this.cars) {
            this.cars = [];
        }
        this.cars.push(car);
        return this.save();
    };
    __decorate([
        tg.prop(),
        __metadata("design:type", Date)
    ], PersistentModel.prototype, "createdAt", void 0);
    __decorate([
        tg.arrayProp({ itemsRef: car_1.Car }),
        __metadata("design:type", Array)
    ], PersistentModel.prototype, "cars", void 0);
    __decorate([
        tg.instanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PersistentModel.prototype, "getClassName", null);
    __decorate([
        tg.instanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [car_1.Car]),
        __metadata("design:returntype", void 0)
    ], PersistentModel.prototype, "addCar", null);
    __decorate([
        tg.staticMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PersistentModel, "getStaticName", null);
    return PersistentModel;
}(tg.Typegoose));
exports.PersistentModel = PersistentModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc2lzdGVudE1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3QvbW9kZWxzL1BlcnNpc3RlbnRNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBc0M7QUFDdEMsNkJBQTRCO0FBRTVCO0lBQThDLG1DQUFZO0lBQTFEOztJQThCQSxDQUFDO0lBckJRLHNDQUFZLEdBQW5CO1FBQ0UsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBSWEsNkJBQWEsR0FBM0I7UUFDRSxPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFJTSxnQ0FBTSxHQUFiLFVBQXNELEdBQVE7UUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNoQjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUEzQkQ7UUFEQyxFQUFFLENBQUMsSUFBSSxFQUFFO2tDQUNRLElBQUk7c0RBQUM7SUFHdkI7UUFEQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQUcsRUFBRSxDQUFDOztpREFDSjtJQUk1QjtRQURDLEVBQUUsQ0FBQyxjQUFjOzs7O3VEQUdqQjtJQVVEO1FBREMsRUFBRSxDQUFDLGNBQWM7O3lDQUN5QyxTQUFHOztpREFRN0Q7SUFkRDtRQURDLEVBQUUsQ0FBQyxZQUFZOzs7OzhDQUdmO0lBYUgsc0JBQUM7Q0FBQSxBQTlCRCxDQUE4QyxFQUFFLENBQUMsU0FBUyxHQThCekQ7QUE5QnFCLDBDQUFlIn0=