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
var mongoConnect_1 = require("../utils/mongoConnect");
var dummy_1 = require("./dummy");
var hooktestModel_1 = require("./hooktestModel");
describe('Typegoose', function () {
    describe('Hooks', function () {
        before(function () { return mongoConnect_1.initDatabase(); });
        it('should update the property using isModified during pre save hook', function () { return __awaiter(_this, void 0, void 0, function () {
            var hook, savedHook;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, hooktestModel_1.model.create({
                            material: 'steel',
                        })];
                    case 1:
                        hook = _a.sent();
                        chai_1.expect(hook).to.have.property('shape', 'oldShape');
                        hook.set('shape', 'changed');
                        return [4, hook.save()];
                    case 2:
                        savedHook = _a.sent();
                        chai_1.expect(savedHook).to.have.property('shape', 'newShape');
                        return [2];
                }
            });
        }); });
        it('should test findOne post hook', function () { return __awaiter(_this, void 0, void 0, function () {
            var dummyFromDb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, dummy_1.model.create({ text: 'initial' })];
                    case 1:
                        _a.sent();
                        return [4, dummy_1.model.findOne({ text: 'saved' })];
                    case 2:
                        dummyFromDb = _a.sent();
                        chai_1.expect(dummyFromDb).to.have.property('text', 'changed in post findOne hook');
                        return [2];
                }
            });
        }); });
        it('should find the unexpected dummies because of pre and post hooks', function () { return __awaiter(_this, void 0, void 0, function () {
            var foundDummies;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, dummy_1.model.create([{ text: 'whatever' }, { text: 'whatever' }])];
                    case 1:
                        _a.sent();
                        return [4, dummy_1.model.find({ text: 'saved' })];
                    case 2:
                        foundDummies = _a.sent();
                        chai_1.expect(foundDummies.length).to.be.above(2);
                        chai_1.expect(foundDummies[0]).to.have.property('text', 'changed in post find hook');
                        chai_1.expect(foundDummies[1]).to.have.property('text', 'saved');
                        return [2];
                }
            });
        }); });
        it('should test the updateMany hook', function () { return __awaiter(_this, void 0, void 0, function () {
            var foundUpdatedDummies;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, dummy_1.model.insertMany([{ text: 'foobar42' }, { text: 'foobar42' }])];
                    case 1:
                        _a.sent();
                        return [4, dummy_1.model.updateMany({
                                text: 'foobar42',
                            }, {
                                text: 'lorem ipsum',
                            })];
                    case 2:
                        _a.sent();
                        return [4, dummy_1.model.find({ text: 'updateManied' })];
                    case 3:
                        foundUpdatedDummies = _a.sent();
                        chai_1.expect(foundUpdatedDummies.length).to.equal(2);
                        return [2];
                }
            });
        }); });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L2hvb2tUZXN0cy9ob29rcy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQXdEQTs7QUF4REEsNkJBQThCO0FBRTlCLHNEQUFxRDtBQUNyRCxpQ0FBeUM7QUFDekMsaURBQWdEO0FBRWhELFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFDcEIsUUFBUSxDQUFDLE9BQU8sRUFBRTtRQUNoQixNQUFNLENBQUMsY0FBTSxPQUFBLDJCQUFZLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQztRQUU3QixFQUFFLENBQUMsa0VBQWtFLEVBQUU7Ozs7NEJBQ3hELFdBQU0scUJBQUksQ0FBQyxNQUFNLENBQUM7NEJBQzdCLFFBQVEsRUFBRSxPQUFPO3lCQUNsQixDQUFDLEVBQUE7O3dCQUZJLElBQUksR0FBRyxTQUVYO3dCQUNGLGFBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7d0JBRW5ELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO3dCQUNYLFdBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxFQUFBOzt3QkFBN0IsU0FBUyxHQUFHLFNBQWlCO3dCQUNuQyxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDOzs7O2FBQ3pELENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQywrQkFBK0IsRUFBRTs7Ozs0QkFDbEMsV0FBTSxhQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUE7O3dCQUF2QyxTQUF1QyxDQUFDO3dCQUdwQixXQUFNLGFBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQTs7d0JBQXBELFdBQVcsR0FBRyxTQUFzQzt3QkFDMUQsYUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSw4QkFBOEIsQ0FBQyxDQUFDOzs7O2FBQzlFLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxrRUFBa0UsRUFBRTs7Ozs0QkFDckUsV0FBTSxhQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFBOzt3QkFBaEUsU0FBZ0UsQ0FBQzt3QkFFNUMsV0FBTSxhQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUE7O3dCQUFsRCxZQUFZLEdBQUcsU0FBbUM7d0JBR3hELGFBQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzNDLGFBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsMkJBQTJCLENBQUMsQ0FBQzt3QkFDOUUsYUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQzs7OzthQUMzRCxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsaUNBQWlDLEVBQUU7Ozs7NEJBQ3BDLFdBQU0sYUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBQTs7d0JBQXBFLFNBQW9FLENBQUM7d0JBRXJFLFdBQU0sYUFBSyxDQUFDLFVBQVUsQ0FBQztnQ0FDckIsSUFBSSxFQUFFLFVBQVU7NkJBQ2pCLEVBQUU7Z0NBQ0MsSUFBSSxFQUFFLGFBQWE7NkJBQ3BCLENBQUMsRUFBQTs7d0JBSkosU0FJSSxDQUFDO3dCQUV1QixXQUFNLGFBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLENBQUMsRUFBQTs7d0JBQWhFLG1CQUFtQixHQUFHLFNBQTBDO3dCQUd0RSxhQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OzthQUNoRCxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=