/// <reference types="mongoose" />
import { InstanceType, ModelType, Ref, Typegoose } from '../../typegoose';
import { Genders } from '../enums/genders';
import { Role } from '../enums/role';
import { Car } from './car';
import { Job } from './job';
export interface FindOrCreateResult<T> {
    created: boolean;
    doc: InstanceType<T>;
}
export declare class User extends Typegoose {
    firstName: string;
    lastName: string;
    fullName: string;
    nick?: string;
    uniqueId?: string;
    username?: string;
    expireAt?: Date;
    age?: number;
    gender: Genders;
    role: Role;
    roles: Role[];
    job?: Job;
    car?: Ref<Car>;
    languages: string[];
    previousJobs?: Job[];
    previousCars?: Ref<Car>[];
    static findByAge(this: ModelType<User> & typeof User, age: number): import("mongoose").DocumentQuery<InstanceType<User>, InstanceType<User>>;
    incrementAge(this: InstanceType<User>): Promise<InstanceType<User>>;
    addLanguage(this: InstanceType<User>): Promise<InstanceType<User>>;
    addJob(this: InstanceType<User>, job?: Partial<Job>): Promise<InstanceType<User>>;
    static findOrCreate: (condition: any) => Promise<FindOrCreateResult<User>>;
}
export declare const model: import("mongoose").Model<InstanceType<User>> & User & typeof User;
