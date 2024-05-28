class Savvy{
    
    user;
    transactions = [];
    budgets = [];
    savings = [];
    categorys = [];
    settings = [];


    registerUser(user){
        this.user = user;
    }

    addTransaction(transaction){
        this.transactions.push(transaction);
    }

    addBudget(budget){
        this.budgets.push(budget);
    }

    addSavings(savings){
        this.savings.push(savings);
    }

    addCategory(category){
        this.categorys.push(category);
    }


    getUser(){
        return this.user;
    }
    
    getTransactions(){
        return this.transactions;
    }

    getBudgets(){
        return this.budgets;
    }

    getSavings(){
        return this.savings;
    }
    getCategorys(){
        return this.categorys;
    }
}