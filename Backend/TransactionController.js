class Transaction {
    type;
    repeat;
    date;
    amount;
    category;
    note;
    constructor(type, repeat, date, amount, category, note) {
        this.type = type;
        this.repeat = repeat;
        this.date = date;
        this.amount = amount;
        this.category = category;
        this.note = note;
    }
}