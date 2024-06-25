class Transaction {
    title;
    type;
    repeat;
    date;
    amount;
    category;
    constructor(type, repeat, date, amount, category) {
        this.type = type;
        this.repeat = repeat;
        this.date = date;
        this.amount = amount;
        this.category = category;
    }
}

export default Transaction;