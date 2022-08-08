import { paymentType } from "../enums/payment-type.enum";

class Insurance {
    cardId?: string[];
    personId?: string[];
    startDate?: Date;
    endDate?: Date;
    company?: string[];
    price?: number;
    paymentType?: paymentType;
    notes?: string;

    // constructor(private _cardId: string[], private _personId: string[], private _startDate: Date, private _endDate: Date, private _company: string[], private _price: number, private _notes: string, private _paymentType: paymentType){
    //     this.cardId = _cardId;
    //     this.personId = _personId;
    //     this.startDate = _startDate;
    //     this.endDate = _endDate;
    //     this.company = _company;
    //     this.price = _price;
    //     this.paymentType = _paymentType; 
    //     this.notes = _notes;
    // }
}