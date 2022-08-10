import { GenderSelect } from "../enums/gender-select.enum";

export class Owner {
  public static ID: number = 0;
    id?: number;
    firstName?: string;
    lastName?: string;
    cnp?: number;
    birthDate?: Date;
    gender?: GenderSelect;

    constructor(firstName: string, lastName: string, cnp: number, birthDate: Date, gender: GenderSelect){
        this.firstName = firstName;
        this.lastName = lastName;
        this.cnp = cnp;
        this.birthDate = birthDate;
        this.gender = gender;
        this.id = Owner.ID++;
    }
}
