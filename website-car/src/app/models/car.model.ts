import { fuelType } from "../enums/fuel-type.enum";

class Car {
    brand?: string;
    model?: string;
    cubicCap?: number;
    type?: string;
    serialNum?: number;
    plates?: number; 
    power?: number;
    fuelType?: fuelType;
    ownerId?: string[];

    // constructor(private _brand: string, private _model: string, private _cubicCap: number, private _type: string, private _serialNum: number, private _plates: number, private _power: number, private _ownerId: string[], private _fuelType: fuelType){
    //     this.brand = _brand;
    //     this.model = _model;
    //     this.cubicCap = _cubicCap;
    //     this.type = _type;
    //     this.serialNum = _serialNum;
    //     this.plates = _plates;
    //     this.power = _power;
    //     this.fuelType = _fuelType;
    //     this.ownerId = _ownerId;
    // }
}