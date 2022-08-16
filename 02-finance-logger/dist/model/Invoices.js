export class Invoice {
    constructor(title, amount, createdAt) {
        this.title = title;
        this.amount = amount;
        this.createdAt = createdAt;
    }
    format() {
        return `Payment received for ${this.title} - $${this.amount} on ${this.createdAt.toLocaleString()}`;
    }
}
