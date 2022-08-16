import { HasFormatter } from "./hasFormatter.interface";

export class Payment implements HasFormatter {
    constructor(private title: string, private amount: number, private createdAt: Date) { }
    format() {
        return `Payment done for ${this.title} - $${this.amount} on ${this.createdAt.toLocaleString()}`
    }
}