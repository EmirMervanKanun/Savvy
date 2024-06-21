class Budget {
    title;
    startDate;
    endDate;
    category;
    amount;
    constructor(title, startDate, endDate, category, amount) {
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.category = category;
        this.amount = amount;
    }
}

export default Budget;