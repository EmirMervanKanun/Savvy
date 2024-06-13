import Amount from './Amount.js';
import Budget from './BudgetController.js';
import Category from './CategoryController.js';
import Currency from './CurrencyController.js';
import Savings from './SavingsController.js';
import Settings from './SettingsController.js';
import Transaction from './TransactionController.js';
import User from './UserController.js';

class Savvy{
    
    user;
    transactions = [];
    budgets = [];
    savings = [];
    categorys = [];
    currency = [];
    settings;

    constructor(){
        this.initCategories();
        this.initSettings();
        this.initCurrency();
    }


    registerUser(firstname, lastname, amount, currency, img){
        this.user = new User(firstname, lastname, new Amount(amount, currency), img);
    }

    addTransaction(type, repeat, date, amount, currency, category, note, ){
        this.transactions.push(new Transaction(type, repeat, date, new Amount(amount, currency), category, note));
    }

    addBudget(title, startDate, endDate, category, amount, currency){
        this.budgets.push(new Budget(title, startDate, endDate, category, new Amount(amount, currency)));
    }

    addSavings(title, endDate, category, amount, currency){
        this.savings.push(new Savings(title, endDate, category, new Amount(amount, currency)));
    }

    addCategory(title, img){
        this.categorys.push(new Category(title, img));
    }



    initCurrency(){
        this.currency.push(new Currency("€", "Euro", "EUR"));
        this.currency.push(new Currency("$", "Dollar", "USD"));
    }

    initSettings(){
        this.settings = new Settings(true, true, true, true);
    }

    initCategories(){
        this.categorys.push(new Category("Klamotten", "../../Icons/Categories/clothes.png"));
        this.categorys.push(new Category("Technik", "../../Icons/Categories/devices.png"));
        this.categorys.push(new Category("Lebensmittel", "../../Icons/Categories/groceries.png"));
        this.categorys.push(new Category("Medikamente", "../../Icons/Categories/medication.png"));
        this.categorys.push(new Category("Haustier", "../../Icons/Categories/pets.png"));
        this.categorys.push(new Category("Miete", "../../Icons/Categories/rent.png"));
        this.categorys.push(new Category("Transportmittel", "../../Icons/Categories/transportation.png"));
        this.categorys.sort((a, b) => a.title.localeCompare(b.title));
    }

    initTest(){
        this.registerUser("Max", "Mustermann", 5000, savy.currency[0], "../../Icons/ProfilePictures/profilePicture4.png");
        this.addTransaction("Ausgabe", "Einmalig", "2021-06-01", 50, savy.currency[0], savy.categorys[1], "H&M");
        this.addTransaction("Einnahme", "Monatlich", "2021-06-01", 500, savy.currency[0], savy.categorys[1], "Lohn");
        this.addBudget("Lebensmittel", "2021-06-01", "2021-06-30", savy.categorys[2], 1000, savy.currency[0]);
        this.addSavings("Fahrrad", "2021-12-24", savy.categorys[5], 1000, savy.currency[0]);
    }
}