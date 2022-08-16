import { HasFormatter } from "./hasFormatter.interface";

export class Invoice implements HasFormatter {
    constructor(private title: string, private amount: number, private createdAt: Date) { }
    format() {
        return `Payment received for ${this.title} - $${this.amount} on ${this.createdAt.toLocaleString()}`
    }
}
