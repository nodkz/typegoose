/// <reference types="mongoose" />
import * as tg from '../../typegoose';
import { PersistentModel } from './PersistentModel';
export declare class Person extends PersistentModel {
    email: string;
    getClassName(): string;
    static getStaticName(): string;
}
export declare const model: import("mongoose").Model<tg.InstanceType<Person>> & Person & typeof Person;
