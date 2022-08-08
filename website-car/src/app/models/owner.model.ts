import { genderSelect } from "../enums/gender-select.enum";

class Owner {
    firstName?: string;
    lastName?: string;
    cnp?: number;
    birthDate?: Date;
    gender?: genderSelect;

    // constructor(private _firstName: string, private _lastName: string, private _cnp: number, private _birthDate: Date, private _gender: genderSelect){
    //     this.firstName = _firstName;
    //     this.lastName = _lastName;
    //     this.cnp = _cnp;
    //     this.birthDate = _birthDate;
    //     this.gender = _gender;
    // }
}