interface Prototype {
    events: Object;
}
declare type Fun = (...args: any[]) => void;
declare class EventEmitter {
    events: {
        [prop: string]: Array<any>;
    };
    constructor();
    on(type: string, callback: Fun): void;
    emit(type: string, ...args: any[]): void;
    off(type: string, callback: Fun): void;
    once(type: string, callback: Fun): void;
}
declare const eventEmitter: EventEmitter;
declare const onCallback: Fun;
