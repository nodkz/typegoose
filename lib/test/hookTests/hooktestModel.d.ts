/// <reference types="mongoose" />
import { Typegoose } from '../../typegoose';
export declare class Hook extends Typegoose {
    material: string;
    shape?: string;
}
export declare const model: import("mongoose").Model<import("../../typegoose").InstanceType<Hook>> & Hook & typeof Hook;
