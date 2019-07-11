import { Ref, Typegoose } from '../../typegoose';
export declare class Virtual extends Typegoose {
    dummyVirtual?: string;
    readonly virtualSubs: any;
}
export declare class VirtualSub extends Typegoose {
    virtual: Ref<Virtual>;
    dummy: string;
}
