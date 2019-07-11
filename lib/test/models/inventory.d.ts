/// <reference types="mongoose" />
import { Ref, Typegoose } from '../../typegoose';
export declare class Scooter extends Typegoose {
    makeAndModel: string;
}
export declare class Beverage extends Typegoose {
    isSugarFree: boolean;
    isDecaf: boolean;
}
export declare class Inventory extends Typegoose {
    count: number;
    value: number;
    refItemPathName: string;
    name: string;
    kind: Ref<Beverage | Scooter>;
}
export declare const ScooterModel: import("mongoose").Model<import("../../typegoose").InstanceType<Scooter>> & Scooter & typeof Scooter;
export declare const BeverageModel: import("mongoose").Model<import("../../typegoose").InstanceType<Beverage>> & Beverage & typeof Beverage;
export declare const InventoryModel: import("mongoose").Model<import("../../typegoose").InstanceType<Inventory>> & Inventory & typeof Inventory;
