import { Printable } from "./Printable";

export class Trade implements Printable {

    constructor(readonly date: Date, readonly amount: number, readonly value: number) {}

    get volume() {
        return this.amount * this.value;
    }

    toString() : void {
        console.log(`TRADE:
            Date: ${this.date}
            Amount: ${this.amount}
            Value: ${this.value}
            Volume: ${this.volume}
        `);
    }
}