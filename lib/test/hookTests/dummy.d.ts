/// <reference types="mongoose" />
import { Typegoose } from '../../typegoose';
export declare class Dummy extends Typegoose {
    text: string;
}
export declare const model: import("mongoose").Model<import("../../typegoose").InstanceType<Dummy>> & Dummy & typeof Dummy;
