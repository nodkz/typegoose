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
var mongoose = require("mongoose");
var typegoose_1 = require("../../typegoose");
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], Car.prototype, "model", void 0);
    __decorate([
        typegoose_1.prop({ lowercase: true }),
        __metadata("design:type", String)
    ], Car.prototype, "version", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Boolean)
    ], Car.prototype, "isSedan", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", mongoose.Types.Decimal128)
    ], Car.prototype, "price", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", mongoose.Types.ObjectId)
    ], Car.prototype, "someId", void 0);
    Car = __decorate([
        typegoose_1.pre('save', function (next) {
            if (this.model === 'Trabant') {
                this.isSedan = true;
            }
            next();
        })
    ], Car);
    return Car;
}(typegoose_1.Typegoose));
exports.Car = Car;
exports.model = new Car().getModelForClass(Car);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Rlc3QvbW9kZWxzL2Nhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBcUM7QUFFckMsNkNBQXVEO0FBUXZEO0lBQXlCLHVCQUFTO0lBQWxDOztJQWVBLENBQUM7SUFiQztRQURDLGdCQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3NDQUNKO0lBR3JCO1FBREMsZ0JBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7d0NBQ0g7SUFHdkI7UUFEQyxnQkFBSSxFQUFFOzt3Q0FDa0I7SUFHekI7UUFEQyxnQkFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO2tDQUNYLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVTtzQ0FBQztJQUd4QztRQURDLGdCQUFJLEVBQUU7a0NBQ1EsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRO3VDQUFDO0lBZDVCLEdBQUc7UUFOZixlQUFHLENBQU0sTUFBTSxFQUFFLFVBQVMsSUFBSTtZQUM3QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO2dCQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNyQjtZQUNELElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDO09BQ1csR0FBRyxDQWVmO0lBQUQsVUFBQztDQUFBLEFBZkQsQ0FBeUIscUJBQVMsR0FlakM7QUFmWSxrQkFBRztBQWlCSCxRQUFBLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDIn0=