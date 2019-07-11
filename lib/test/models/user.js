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
var findOrCreate = require("mongoose-findorcreate");
var typegoose_1 = require("../../typegoose");
var genders_1 = require("../enums/genders");
var role_1 = require("../enums/role");
var car_1 = require("./car");
var job_1 = require("./job");
var User = (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User_1 = User;
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (full) {
            var split = full.split(' ');
            this.firstName = split[0];
            this.lastName = split[1];
        },
        enumerable: true,
        configurable: true
    });
    User.findByAge = function (age) {
        return this.findOne({ age: age });
    };
    User.prototype.incrementAge = function () {
        var age = this.age || 1;
        this.age = age + 1;
        return this.save();
    };
    User.prototype.addLanguage = function () {
        this.languages.push('Hungarian');
        return this.save();
    };
    User.prototype.addJob = function (job) {
        if (job === void 0) { job = {}; }
        this.previousJobs.push(job);
        return this.save();
    };
    var User_1;
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], User.prototype, "firstName", void 0);
    __decorate([
        typegoose_1.prop({ required: true }),
        __metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], User.prototype, "fullName", null);
    __decorate([
        typegoose_1.prop({ default: 'Nothing' }),
        __metadata("design:type", String)
    ], User.prototype, "nick", void 0);
    __decorate([
        typegoose_1.prop({ index: true, unique: true }),
        __metadata("design:type", String)
    ], User.prototype, "uniqueId", void 0);
    __decorate([
        typegoose_1.prop({ unique: true, sparse: true }),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        typegoose_1.prop({ expires: '24h' }),
        __metadata("design:type", Date)
    ], User.prototype, "expireAt", void 0);
    __decorate([
        typegoose_1.prop({ min: 10, max: 21 }),
        __metadata("design:type", Number)
    ], User.prototype, "age", void 0);
    __decorate([
        typegoose_1.prop({ enum: genders_1.Genders, required: true }),
        __metadata("design:type", String)
    ], User.prototype, "gender", void 0);
    __decorate([
        typegoose_1.prop({ enum: role_1.Role }),
        __metadata("design:type", String)
    ], User.prototype, "role", void 0);
    __decorate([
        typegoose_1.arrayProp({ items: String, enum: role_1.Role, default: role_1.Role.Guest }),
        __metadata("design:type", Array)
    ], User.prototype, "roles", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", job_1.Job)
    ], User.prototype, "job", void 0);
    __decorate([
        typegoose_1.prop({ ref: car_1.Car }),
        __metadata("design:type", Object)
    ], User.prototype, "car", void 0);
    __decorate([
        typegoose_1.arrayProp({ items: String, required: true }),
        __metadata("design:type", Array)
    ], User.prototype, "languages", void 0);
    __decorate([
        typegoose_1.arrayProp({ items: job_1.Job }),
        __metadata("design:type", Array)
    ], User.prototype, "previousJobs", void 0);
    __decorate([
        typegoose_1.arrayProp({ itemsRef: car_1.Car }),
        __metadata("design:type", Array)
    ], User.prototype, "previousCars", void 0);
    __decorate([
        typegoose_1.instanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "incrementAge", null);
    __decorate([
        typegoose_1.instanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], User.prototype, "addLanguage", null);
    __decorate([
        typegoose_1.instanceMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], User.prototype, "addJob", null);
    __decorate([
        typegoose_1.staticMethod,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], User, "findByAge", null);
    User = User_1 = __decorate([
        typegoose_1.plugin(findOrCreate)
    ], User);
    return User;
}(typegoose_1.Typegoose));
exports.User = User;
exports.model = new User().getModelForClass(User);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L21vZGVscy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFzRDtBQUN0RCw2Q0FVeUI7QUFDekIsNENBQTJDO0FBQzNDLHNDQUFxQztBQUNyQyw2QkFBNEI7QUFDNUIsNkJBQTRCO0FBUTVCO0lBQTBCLHdCQUFTO0lBQW5DOztJQW1GQSxDQUFDO2FBbkZZLElBQUk7SUFRZixzQkFBVywwQkFBUTthQUFuQjtZQUNFLE9BQVUsSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBVSxDQUFDO1FBQzlDLENBQUM7YUFDRCxVQUFvQixJQUFJO1lBQ3RCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsQ0FBQzs7O09BTEE7SUErQ2EsY0FBUyxHQUF2QixVQUE2RCxHQUFXO1FBQ3RFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBR00sMkJBQVksR0FBbkI7UUFDRSxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUdNLDBCQUFXLEdBQWxCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFakMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENB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