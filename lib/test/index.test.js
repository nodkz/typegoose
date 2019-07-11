"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var mongoose = require("mongoose");
var assert_1 = require("assert");
var bson_1 = require("bson");
var utils_1 = require("../utils");
var genders_1 = require("./enums/genders");
var role_1 = require("./enums/role");
var car_1 = require("./models/car");
var inventory_1 = require("./models/inventory");
var nested_object_1 = require("./models/nested-object");
var person_1 = require("./models/person");
var rating_1 = require("./models/rating");
var user_1 = require("./models/user");
var virtualprop_1 = require("./models/virtualprop");
var mongoConnect_1 = require("./utils/mongoConnect");
describe('Typegoose', function () {
    before(function () { return mongoConnect_1.initDatabase(); });
    after(function () { return mongoConnect_1.closeDatabase(); });
    it('should create a User with connections', function () { return __awaiter(_this, void 0, void 0, function () {
        var car, _a, trabant, zastava, user, foundUser, _b, janitor, manager, _c, foundTrabant, foundZastava, foundUser, createdUser, foundUser, err_1;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4, car_1.model.create({
                        model: 'Tesla',
                        version: 'ModelS',
                        price: mongoose.Types.Decimal128.fromString('50123.25'),
                    })];
                case 1:
                    car = _d.sent();
                    return [4, car_1.model.create([{
                                model: 'Trabant',
                                price: mongoose.Types.Decimal128.fromString('28189.25'),
                            }, {
                                model: 'Zastava',
                                price: mongoose.Types.Decimal128.fromString('1234.25'),
                            }])];
                case 2:
                    _a = _d.sent(), trabant = _a[0], zastava = _a[1];
                    return [4, user_1.model.create({
                            _id: mongoose.Types.ObjectId(),
                            firstName: 'John',
                            lastName: 'Doe',
                            age: 20,
                            uniqueId: 'john-doe-20',
                            gender: genders_1.Genders.MALE,
                            role: role_1.Role.User,
                            job: {
                                title: 'Developer',
                                position: 'Lead',
                                jobType: {
                                    salery: 5000,
                                    field: 'IT',
                                },
                            },
                            car: car.id,
                            languages: ['english', 'typescript'],
                            previousJobs: [{
                                    title: 'Janitor',
                                }, {
                                    title: 'Manager',
                                }],
                            previousCars: [trabant.id, zastava.id],
                        })];
                case 3:
                    user = _d.sent();
                    return [4, user_1.model
                            .findById(user.id)
                            .populate('car previousCars')
                            .exec()];
                case 4:
                    foundUser = _d.sent();
                    chai_1.expect(foundUser).to.have.property('nick', 'Nothing');
                    chai_1.expect(foundUser).to.have.property('firstName', 'John');
                    chai_1.expect(foundUser).to.have.property('lastName', 'Doe');
                    chai_1.expect(foundUser).to.have.property('uniqueId', 'john-doe-20');
                    chai_1.expect(foundUser).to.have.property('age', 20);
                    chai_1.expect(foundUser).to.have.property('gender', genders_1.Genders.MALE);
                    chai_1.expect(foundUser).to.have.property('role', role_1.Role.User);
                    chai_1.expect(foundUser).to.have.property('roles').to.have.length(1).to.include(role_1.Role.Guest);
                    chai_1.expect(foundUser).to.have.property('job');
                    chai_1.expect(foundUser).to.have.property('car');
                    chai_1.expect(foundUser).to.have.property('languages').to.have.length(2).to.include('english').to.include('typescript');
                    chai_1.expect(foundUser.job).to.have.property('title', 'Developer');
                    chai_1.expect(foundUser.job).to.have.property('position', 'Lead');
                    chai_1.expect(foundUser.job).to.have.property('startedAt').to.be.instanceof(Date);
                    chai_1.expect(foundUser.job.jobType).to.not.have.property('_id');
                    chai_1.expect(foundUser.job.titleInUppercase()).to.eq('Developer'.toUpperCase());
                    chai_1.expect(foundUser.job.jobType).to.have.property('salery', 5000);
                    chai_1.expect(foundUser.job.jobType).to.have.property('field', 'IT');
                    chai_1.expect(foundUser.job.jobType).to.have.property('salery').to.be.a('number');
                    chai_1.expect(foundUser.car).to.have.property('model', 'Tesla');
                    chai_1.expect(foundUser.car).to.have.property('version', 'models');
                    chai_1.expect(foundUser).to.have.property('previousJobs').to.have.length(2);
                    chai_1.expect(foundUser).to.have.property('fullName', 'John Doe');
                    _b = foundUser.previousJobs, janitor = _b[0], manager = _b[1];
                    chai_1.expect(janitor).to.have.property('title', 'Janitor');
                    chai_1.expect(manager).to.have.property('title', 'Manager');
                    chai_1.expect(foundUser).to.have.property('previousCars').to.have.length(2);
                    _c = foundUser.previousCars, foundTrabant = _c[0], foundZastava = _c[1];
                    chai_1.expect(foundTrabant).to.have.property('model', 'Trabant');
                    chai_1.expect(foundTrabant).to.have.property('isSedan', true);
                    chai_1.expect(foundZastava).to.have.property('model', 'Zastava');
                    chai_1.expect(foundZastava).to.have.property('isSedan', undefined);
                    foundUser.fullName = 'Sherlock Holmes';
                    chai_1.expect(foundUser).to.have.property('firstName', 'Sherlock');
                    chai_1.expect(foundUser).to.have.property('lastName', 'Holmes');
                    return [4, foundUser.incrementAge()];
                case 5:
                    _d.sent();
                    chai_1.expect(foundUser).to.have.property('age', 21);
                    return [4, user_1.model.findByAge(21)];
                case 6:
                    foundUser = _d.sent();
                    chai_1.expect(foundUser).to.have.property('firstName', 'Sherlock');
                    chai_1.expect(foundUser).to.have.property('lastName', 'Holmes');
                    return [4, user_1.model.findOrCreate({
                            firstName: 'Jane',
                            lastName: 'Doe',
                            gender: genders_1.Genders.FEMALE,
                        })];
                case 7:
                    createdUser = _d.sent();
                    chai_1.expect(createdUser).to.be.ok;
                    chai_1.expect(createdUser).to.have.property('created');
                    chai_1.expect(createdUser.created).to.be.equals(true);
                    chai_1.expect(createdUser).to.have.property('doc');
                    chai_1.expect(createdUser.doc).to.have.property('firstName', 'Jane');
                    return [4, user_1.model.findOrCreate({
                            firstName: 'Jane',
                            lastName: 'Doe',
                        })];
                case 8:
                    foundUser = _d.sent();
                    chai_1.expect(foundUser).to.be.ok;
                    chai_1.expect(foundUser).to.have.property('created');
                    chai_1.expect(foundUser.created).to.be.equals(false);
                    chai_1.expect(foundUser).to.have.property('doc');
                    chai_1.expect(foundUser.doc).to.have.property('firstName', 'Jane');
                    _d.label = 9;
                case 9:
                    _d.trys.push([9, 11, , 12]);
                    return [4, user_1.model.create({
                            _id: mongoose.Types.ObjectId(),
                            firstName: 'John',
                            lastName: 'Doe',
                            age: 20,
                            gender: genders_1.Genders.MALE,
                            uniqueId: 'john-doe-20',
                        })];
                case 10:
                    _d.sent();
                    return [3, 12];
                case 11:
                    err_1 = _d.sent();
                    chai_1.expect(err_1).to.have.property('code', 11000);
                    return [3, 12];
                case 12: return [2];
            }
        });
    }); });
    it('should add a language and job using instance methods', function () { return __awaiter(_this, void 0, void 0, function () {
        var user, savedUser;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, user_1.model.create({
                        firstName: 'harry',
                        lastName: 'potter',
                        gender: genders_1.Genders.MALE,
                        languages: ['english'],
                        uniqueId: 'unique-id',
                    })];
                case 1:
                    user = _a.sent();
                    return [4, user.addJob({ position: 'Dark Wizzard', title: 'Archmage' })];
                case 2:
                    _a.sent();
                    return [4, user.addJob()];
                case 3:
                    _a.sent();
                    return [4, user.addLanguage()];
                case 4:
                    savedUser = _a.sent();
                    chai_1.expect(savedUser.languages).to.include('Hungarian');
                    chai_1.expect(savedUser.previousJobs.length).to.be.above(0);
                    savedUser.previousJobs.map(function (prevJob) {
                        chai_1.expect(prevJob.startedAt).to.be.a('date');
                    });
                    return [2];
            }
        });
    }); });
    it('should add compound index', function () { return __awaiter(_this, void 0, void 0, function () {
        var user, car, created;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, user_1.model.findOne()];
                case 1:
                    user = _a.sent();
                    return [4, car_1.model.findOne()];
                case 2:
                    car = _a.sent();
                    return [4, rating_1.model.create({ user: user._id, car: car._id, stars: 4 })];
                case 3:
                    _a.sent();
                    return [4, rating_1.model.create({ user: user._id, car: car._id, stars: 5 })
                            .then(function () { return true; }).catch(function () { return false; })];
                case 4:
                    created = _a.sent();
                    chai_1.expect(created).to.be.equals(false);
                    return [2];
            }
        });
    }); });
    it('should add and populate the virtual properties', function () { return __awaiter(_this, void 0, void 0, function () {
        var virtualModel, virtualSubModel, virtual1, virtualsub1, virtualsub2, virtualsub3, newfound;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    virtualModel = new virtualprop_1.Virtual().getModelForClass(virtualprop_1.Virtual);
                    virtualSubModel = new virtualprop_1.VirtualSub().getModelForClass(virtualprop_1.VirtualSub);
                    return [4, new virtualModel({ dummyVirtual: 'dummyVirtual1' }).save()];
                case 1:
                    virtual1 = _a.sent();
                    return [4, new virtualSubModel({
                            dummy: 'virtualSub1',
                            virtual: virtual1._id
                        }).save()];
                case 2:
                    virtualsub1 = _a.sent();
                    return [4, new virtualSubModel({
                            dummy: 'virtualSub2',
                            virtual: new bson_1.ObjectID()
                        }).save()];
                case 3:
                    virtualsub2 = _a.sent();
                    return [4, new virtualSubModel({
                            dummy: 'virtualSub3',
                            virtual: virtual1._id
                        }).save()];
                case 4:
                    virtualsub3 = _a.sent();
                    return [4, virtualModel.findById(virtual1._id).populate('virtualSubs').exec()];
                case 5:
                    newfound = _a.sent();
                    chai_1.expect(newfound.dummyVirtual).to.be.equal('dummyVirtual1');
                    chai_1.expect(newfound.virtualSubs).to.not.be.an('undefined');
                    chai_1.expect(newfound.virtualSubs[0].dummy).to.be.equal('virtualSub1');
                    chai_1.expect(newfound.virtualSubs[0]._id.toString()).to.be.equal(virtualsub1._id.toString());
                    chai_1.expect(newfound.virtualSubs[1].dummy).to.be.equal('virtualSub3');
                    chai_1.expect(newfound.virtualSubs[1]._id.toString()).to.be.equal(virtualsub3._id.toString());
                    chai_1.expect(newfound.virtualSubs).to.not.include(virtualsub2);
                    return [2];
            }
        });
    }); });
    it('Should support dynamic references via refPath', function () { return __awaiter(_this, void 0, void 0, function () {
        var sprite, cokeZero, vespa, in1, in2, items;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sprite = new inventory_1.BeverageModel({
                        isDecaf: true,
                        isSugarFree: false
                    });
                    return [4, sprite.save()];
                case 1:
                    _a.sent();
                    cokeZero = new inventory_1.BeverageModel({
                        isDecaf: false,
                        isSugarFree: true
                    });
                    return [4, cokeZero.save()];
                case 2:
                    _a.sent();
                    vespa = new inventory_1.ScooterModel({
                        makeAndModel: 'Vespa'
                    });
                    return [4, vespa.save()];
                case 3:
                    _a.sent();
                    in1 = new inventory_1.InventoryModel({
                        refItemPathName: 'Beverage',
                        kind: sprite,
                        count: 10,
                        value: 1.99
                    });
                    return [4, in1.save()];
                case 4:
                    _a.sent();
                    in2 = new inventory_1.InventoryModel({
                        refItemPathName: 'Scooter',
                        kind: vespa,
                        count: 1,
                        value: 1099.98
                    });
                    return [4, in2.save()];
                case 5:
                    _a.sent();
                    return [4, inventory_1.InventoryModel.find({}).populate('kind')];
                case 6:
                    items = _a.sent();
                    chai_1.expect(items[0].kind.isDecaf).to.be.equals(true);
                    chai_1.expect(items[1].kind.isDecaf).to.be.an('undefined');
                    return [2];
            }
        });
    }); });
});
describe('getClassForDocument()', function () {
    before(function () { return mongoConnect_1.initDatabase(); });
    it('should return correct class type for document', function () { return __awaiter(_this, void 0, void 0, function () {
        var car, carReflectedType, user, userReflectedType;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, car_1.model.create({
                        model: 'Tesla',
                        price: mongoose.Types.Decimal128.fromString('50123.25'),
                    })];
                case 1:
                    car = _a.sent();
                    carReflectedType = utils_1.getClassForDocument(car);
                    chai_1.expect(carReflectedType).to.equals(car_1.Car);
                    return [4, user_1.model.create({
                            _id: mongoose.Types.ObjectId(),
                            firstName: 'John2',
                            lastName: 'Doe2',
                            gender: genders_1.Genders.MALE,
                            languages: ['english2', 'typescript2'],
                        })];
                case 2:
                    user = _a.sent();
                    userReflectedType = utils_1.getClassForDocument(user);
                    chai_1.expect(userReflectedType).to.equals(user_1.User);
                    chai_1.expect(carReflectedType).to.not.equals(user_1.User);
                    chai_1.expect(userReflectedType).to.not.equals(car_1.Car);
                    return [2];
            }
        });
    }); });
    it('should use inherited schema', function () { return __awaiter(_this, void 0, void 0, function () {
        var user, car;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, person_1.model.create({
                        email: 'my@email.com',
                    })];
                case 1:
                    user = _a.sent();
                    return [4, car_1.model.create({
                            model: 'Tesla',
                            price: mongoose.Types.Decimal128.fromString('50123.25'),
                        })];
                case 2:
                    car = _a.sent();
                    return [4, user.addCar(car)];
                case 3:
                    _a.sent();
                    return [4, person_1.model.findById(user.id).populate('cars')];
                case 4:
                    user = _a.sent();
                    chai_1.expect(user).to.have.property('createdAt');
                    chai_1.expect(user).to.have.property('email', 'my@email.com');
                    chai_1.expect(user.cars.length).to.be.above(0);
                    user.cars.map(function (currentCar) {
                        chai_1.expect(currentCar.model).to.be.an('string');
                    });
                    chai_1.expect(user.getClassName()).to.equals('Person');
                    chai_1.expect(person_1.model.getStaticName()).to.equals('Person');
                    return [2];
            }
        });
    }); });
    it('Should store nested address', function () { return __awaiter(_this, void 0, void 0, function () {
        var personInput, person;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    personInput = new nested_object_1.PersonNested();
                    personInput.name = 'Person, Some';
                    personInput.address = new nested_object_1.AddressNested('A Street 1');
                    personInput.moreAddresses = [
                        new nested_object_1.AddressNested('A Street 2'),
                        new nested_object_1.AddressNested('A Street 3'),
                    ];
                    return [4, nested_object_1.PersonNestedModel.create(personInput)];
                case 1:
                    person = _a.sent();
                    chai_1.expect(person).is.not.be.an('undefined');
                    chai_1.expect(person.name).equals('Person, Some');
                    chai_1.expect(person.address).is.not.be.an('undefined');
                    chai_1.expect(person.address.street).equals('A Street 1');
                    chai_1.expect(person.moreAddresses).is.not.be.an('undefined');
                    chai_1.expect(person.moreAddresses.length).equals(2);
                    chai_1.expect(person.moreAddresses[0].street).equals('A Street 2');
                    chai_1.expect(person.moreAddresses[1].street).equals('A Street 3');
                    return [2];
            }
        });
    }); });
    it('should properly set Decimal128, ObjectID types to field', function () {
        chai_1.expect(car_1.model.schema.paths.price.instance).to.eq('Decimal128');
        chai_1.expect(car_1.model.schema.paths.someId.instance).to.eq('ObjectID');
    });
    it('Should validate Decimal128', function () { return __awaiter(_this, void 0, void 0, function () {
        var e_1, car, foundCar;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, car_1.model.create({
                            model: 'Tesla',
                            price: 'NO DECIMAL',
                        })];
                case 1:
                    _a.sent();
                    return [3, 3];
                case 2:
                    e_1 = _a.sent();
                    chai_1.expect(e_1).to.be.a.instanceof(mongoose.Error.ValidationError);
                    return [3, 3];
                case 3: return [4, car_1.model.create({
                        model: 'Tesla',
                        price: mongoose.Types.Decimal128.fromString('123.45'),
                    })];
                case 4:
                    car = _a.sent();
                    return [4, car_1.model.findById(car._id).exec()];
                case 5:
                    foundCar = _a.sent();
                    chai_1.expect(foundCar.price).to.be.a.instanceof(mongoose.Types.Decimal128);
                    chai_1.expect(foundCar.price.toString()).to.eq('123.45');
                    return [2];
            }
        });
    }); });
    it('Should validate email', function () { return __awaiter(_this, void 0, void 0, function () {
        var e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4, person_1.model.create({
                            email: 'email',
                        })];
                case 1:
                    _a.sent();
                    assert_1.fail('Validation must fail.');
                    return [3, 3];
                case 2:
                    e_2 = _a.sent();
                    chai_1.expect(e_2).to.be.a.instanceof(mongoose.Error.ValidationError);
                    return [3, 3];
                case 3: return [2];
            }
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L2luZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBMFhBOztBQTFYQSw2QkFBOEI7QUFDOUIsbUNBQXFDO0FBRXJDLGlDQUE4QjtBQUM5Qiw2QkFBZ0M7QUFDaEMsa0NBQStDO0FBQy9DLDJDQUEwQztBQUMxQyxxQ0FBb0M7QUFDcEMsb0NBQTREO0FBQzVELGdEQUFxSDtBQUNySCx3REFBd0Y7QUFDeEYsMENBQWtEO0FBQ2xELDBDQUFrRDtBQUNsRCxzQ0FBZ0U7QUFDaEUsb0RBQTJEO0FBQzNELHFEQUFtRTtBQUVuRSxRQUFRLENBQUMsV0FBVyxFQUFFO0lBQ3BCLE1BQU0sQ0FBQyxjQUFNLE9BQUEsMkJBQVksRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO0lBRTdCLEtBQUssQ0FBQyxjQUFNLE9BQUEsNEJBQWEsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBRTdCLEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRTs7Ozt3QkFDOUIsV0FBTSxXQUFHLENBQUMsTUFBTSxDQUFDO3dCQUMzQixLQUFLLEVBQUUsT0FBTzt3QkFDZCxPQUFPLEVBQUUsUUFBUTt3QkFDakIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7cUJBQ3hELENBQUMsRUFBQTs7b0JBSkksR0FBRyxHQUFHLFNBSVY7b0JBRXlCLFdBQU0sV0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dDQUMzQyxLQUFLLEVBQUUsU0FBUztnQ0FDaEIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7NkJBQ3hELEVBQUU7Z0NBQ0QsS0FBSyxFQUFFLFNBQVM7Z0NBQ2hCLEtBQUssRUFBRSxRQUFRLENBQUMs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