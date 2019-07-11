"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var data_1 = require("./data");
var errors_1 = require("./errors");
var utils_1 = require("./utils");
var isWithStringValidate = function (options) {
    return options.minlength || options.maxlength || options.match;
};
var isWithStringTransform = function (options) {
    return options.lowercase || options.uppercase || options.trim;
};
var isWithNumberValidate = function (options) { return options.min || options.max; };
var baseProp = function (rawOptions, Type, target, key, isArray) {
    if (isArray === void 0) { isArray = false; }
    var name = target.constructor.name;
    var isGetterSetter = Object.getOwnPropertyDescriptor(target, key);
    if (isGetterSetter) {
        if (isGetterSetter.get) {
            if (!data_1.virtuals[name]) {
                data_1.virtuals[name] = {};
            }
            if (!data_1.virtuals[name][key]) {
                data_1.virtuals[name][key] = {};
            }
            data_1.virtuals[name][key] = __assign({}, data_1.virtuals[name][key], { get: isGetterSetter.get, options: rawOptions });
        }
        if (isGetterSetter.set) {
            if (!data_1.virtuals[name]) {
                data_1.virtuals[name] = {};
            }
            if (!data_1.virtuals[name][key]) {
                data_1.virtuals[name][key] = {};
            }
            data_1.virtuals[name][key] = __assign({}, data_1.virtuals[name][key], { set: isGetterSetter.set, options: rawOptions });
        }
        return;
    }
    if (isArray) {
        utils_1.initAsArray(name, key);
    }
    else {
        utils_1.initAsObject(name, key);
    }
    var ref = rawOptions.ref;
    if (typeof ref === 'string') {
        data_1.schema[name][key] = __assign({}, data_1.schema[name][key], { type: mongoose.Schema.Types.ObjectId, ref: ref });
        return;
    }
    else if (ref) {
        data_1.schema[name][key] = __assign({}, data_1.schema[name][key], { type: mongoose.Schema.Types.ObjectId, ref: ref.name });
        return;
    }
    var itemsRef = rawOptions.itemsRef;
    if (itemsRef) {
        data_1.schema[name][key][0] = __assign({}, data_1.schema[name][key][0], { type: mongoose.Schema.Types.ObjectId, ref: itemsRef.name });
        return;
    }
    var refPath = rawOptions.refPath;
    if (refPath && typeof refPath === 'string') {
        data_1.schema[name][key] = __assign({}, data_1.schema[name][key], { type: mongoose.Schema.Types.ObjectId, refPath: refPath });
        return;
    }
    var itemsRefPath = rawOptions.itemsRefPath;
    if (itemsRefPath && typeof itemsRefPath === 'string') {
        data_1.schema[name][key][0] = __assign({}, data_1.schema[name][key][0], { type: mongoose.Schema.Types.ObjectId, itemsRefPath: itemsRefPath });
        return;
    }
    var enumOption = rawOptions.enum;
    if (enumOption) {
        if (!Array.isArray(enumOption)) {
            rawOptions.enum = Object.keys(enumOption).map(function (propKey) { return enumOption[propKey]; });
        }
    }
    if (isWithStringValidate(rawOptions) && !utils_1.isString(Type)) {
        throw new errors_1.NotStringTypeError(key);
    }
    if (isWithNumberValidate(rawOptions) && !utils_1.isNumber(Type)) {
        throw new errors_1.NotNumberTypeError(key);
    }
    if (isWithStringTransform(rawOptions) && !utils_1.isString(Type)) {
        throw new errors_1.NotStringTypeError(key);
    }
    var instance = new Type();
    var subSchema = data_1.schema[instance.constructor.name];
    if (!subSchema && !utils_1.isPrimitive(Type) && !utils_1.isObject(Type)) {
        throw new errors_1.InvalidPropError(Type.name, key);
    }
    var r = rawOptions["ref"], i = rawOptions["items"], options = __rest(rawOptions, ['ref', 'items']);
    if (utils_1.isPrimitive(Type)) {
        if (isArray) {
            data_1.schema[name][key] = __assign({}, data_1.schema[name][key][0], options, { type: [Type] });
            return;
        }
        data_1.schema[name][key] = __assign({}, data_1.schema[name][key], options, { type: Type });
        return;
    }
    if (utils_1.isObject(Type) && !subSchema) {
        data_1.schema[name][key] = __assign({}, data_1.schema[name][key], options, { type: Object });
        return;
    }
    if (isArray) {
        data_1.schema[name][key] = __assign({}, data_1.schema[name][key][0], options, { type: [__assign({}, (typeof options._id !== 'undefined' ? { _id: options._id } : {}), subSchema)] });
        return;
    }
    var Schema = mongoose.Schema;
    var supressSubschemaId = rawOptions._id === false;
    var virtualSchema = new Schema(__assign({}, subSchema), supressSubschemaId ? { _id: false } : {});
    var schemaInstanceMethods = data_1.methods.instanceMethods[instance.constructor.name];
    if (schemaInstanceMethods) {
        virtualSchema.methods = schemaInstanceMethods;
    }
    data_1.schema[name][key] = __assign({}, data_1.schema[name][key], options, { type: virtualSchema });
    return;
};
exports.prop = function (options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        var Type = Reflect.getMetadata('design:type', target, key);
        if (!Type) {
            throw new errors_1.NoMetadataError(key);
        }
        baseProp(options, Type, target, key);
    };
};
exports.arrayProp = function (options) { return function (target, key) {
    var Type = options.items;
    baseProp(options, Type, target, key, true);
}; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLG1DQUFxQztBQUdyQywrQkFBbUQ7QUFDbkQsbUNBQXFHO0FBQ3JHLGlDQUErRjtBQThEL0YsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLE9BQXNDO0lBQ2xFLE9BQUEsT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxLQUFLO0FBQXZELENBQXVELENBQUM7QUFFMUQsSUFBTSxxQkFBcUIsR0FBRyxVQUFDLE9BQXNDO0lBQ25FLE9BQUEsT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxJQUFJO0FBQXRELENBQXNELENBQUM7QUFFekQsSUFBTSxvQkFBb0IsR0FBRyxVQUFDLE9BQXNDLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQTFCLENBQTBCLENBQUM7QUFFcEcsSUFBTSxRQUFRLEdBQUcsVUFBQyxVQUFlLEVBQUUsSUFBUyxFQUFFLE1BQVcsRUFBRSxHQUFRLEVBQUUsT0FBZTtJQUFmLHdCQUFBLEVBQUEsZUFBZTtJQUNsRixJQUFNLElBQUksR0FBVyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztJQUM3QyxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BFLElBQUksY0FBYyxFQUFFO1FBQ2xCLElBQUksY0FBYyxDQUFDLEdBQUcsRUFBRTtZQUN0QixJQUFJLENBQUMsZUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNuQixlQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ3JCO1lBQ0QsSUFBSSxDQUFDLGVBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFH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