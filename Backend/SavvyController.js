import Currency from './Currency';
class Savvy{
    
    user;
    transactions = [];
    budgets = [];
    savings = [];
    categorys = [];
    settings;
    currency = new Currency();



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


}