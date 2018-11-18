import { Printable } from "./Printable";
import { Equable } from "./Equable";

export class Trade implements Printable, Equable<Trade> {

    constructor(readonly date: Date, readonly amount: number, readonly value: number) {}

    get volume() {
        return this.amount * this.value;
    }

    isEqualTo(other : Trade) : boolean {

        return (this.date.getDate() == other.date.getDate()
            && this.date.getMonth() == other.date.getMonth()
            && this.date.getFullYear() == other.date.getFullYear());
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