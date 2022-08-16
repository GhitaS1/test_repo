import { FuelType } from "../enums/fuel-type.enum";

export class Car {
  public static ID: number = 0;
    id?: number;
    carBrand?: string;
    carModel?: string;
    cubicCap?: number;
    carType?: string;
    serialNum?: number;
    carPlates?: number;
    carPower?: number;
    fuelType?: FuelType;
    ownerId?: string[];

    constructor(brand: string, model: string, cubicCap: number, type: string, serialNum: number, plates: number, power: number, ownerId: string[], fuelType: FuelType){
        this.carBrand = brand;
        this.carModel = model;
        this.cubicCap = cubicCap;
        this.carType = type;
        this.serialNum = serialNum;
        this.carPlates = plates;
        this.carPower = power;
        this.fuelType = fuelType;
        this.ownerId = ownerId;
        this.id = Car.ID++;
    }
}
