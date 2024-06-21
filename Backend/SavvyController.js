import Amount from './AmountController.js';
import Budget from './BudgetController.js';
import Category from './CategoryController.js';
import Currency from './CurrencyController.js';
import Savings from './SavingsController.js';
import Settings from './SettingsController.js';
import Transaction from './TransactionController.js';
import User from './UserController.js';


class Savvy {
  user;
  transactions = [];
  budgets = [];
  savings = [];
  categories = [];
  currency = [];
  settings;

  constructor() {
    this.initCategories();
    this.initSettings();
    this.initCurrency();
    this.initSettings();
  }

  registerUser(firstname, lastname, amount, currency, img) {
    this.user = new User(firstname, lastname, new Amount(amount, currency), img);
  }

  addTransaction(type, repeat, date, amount, currency, category) {
    this.transactions.push(new Transaction(type, repeat, date, new Amount(amount, currency), category));
  }

  addBudget(title, startDate, endDate, category, amount, currency) {
    this.budgets.push(new Budget(title, startDate, endDate, category, new Amount(amount, currency)));
  }

  addSavings(title, endDate, category, amount, currency) {
    this.savings.push(new Savings(title, endDate, category, new Amount(amount, currency)));
  }

  addCategory(label, icon) {
    this.categories.push(new Category(label, icon));
  }

  initCurrency() {
    this.currency.push(new Currency(" ", " ", " ")); // Placeholder für Dropdown
    this.currency.push(new Currency("€", "Euro", "EUR"));
    this.currency.push(new Currency("$", "Dollar", "USD"));
  }

  initSettings() {
    this.settings = new Settings(true, true, true, true);
  }

  initCategories() {
    this.categories.push(new Category("Wähle eine Kategorie aus...", null)); // Placeholder für Dropdown
    this.categories.push(new Category("Klamotten", "../../Icons/Categories/clothes.png"));
    this.categories.push(new Category("Technik", "../../Icons/Categories/devices.png"));
    this.categories.push(new Category("Lebensmittel", "../../Icons/Categories/groceries.png"));
    this.categories.push(new Category("Medikamente", "../../Icons/Categories/medication.png"));
    this.categories.push(new Category("Haustier", "../../Icons/Categories/pets.png"));
    this.categories.push(new Category("Miete", "../../Icons/Categories/rent.png"));
    this.categories.push(new Category("Transportmittel", "../../Icons/Categories/transportation.png"));
  }

  initTest() {
    this.registerUser("Max", "Mustermann", 5000, this.currency[0], "../../Icons/ProfilePictures/profilePicture4.png");
    this.addTransaction("Ausgabe", "Einmalig", "2021-06-01", 50, this.currency[0], this.categories[1]);
    this.addTransaction("Einnahme", "Monatlich", "2021-06-01", 500, this.currency[0], this.categories[1]);
    this.addBudget("Lebensmittel", "2021-06-01", "2021-06-30", this.categories[2], 1000, this.currency[0]);
    this.addSavings("Fahrrad", "2021-12-24", this.categories[5], 1000, this.currency[0]);
  }

  toJSON() {
    return {
      user: this.user,
      transactions: this.transactions,
      budgets: this.budgets,
      savings: this.savings,
      categories: this.categories,
      currency: this.currency, 
      settings: this.settings
    };
  }

  static fromJSON(json) {
    const savvy = new Savvy();
    try {
      if (json.user) {
        savvy.user = new User(
          json.user.firstname,
          json.user.lastname,
          new Amount(json.user.amount.value, json.user.amount.currency),
          json.user.img
        );
      }

      if (json.transactions) {
        savvy.transactions = json.transactions.map(t =>
          new Transaction(
            t.type,
            t.repeat,
            t.date,
            new Amount(t.amount.value, t.amount.currency),
            new Category(t.category.label, t.category.icon)
          )
        );
      }

      if (json.budgets) {
        savvy.budgets = json.budgets.map(b =>
          new Budget(
            b.title,
            b.startDate,
            b.endDate,
            new Category(b.category.label, b.category.icon),
            new Amount(b.amount.value, b.amount.currency)
          )
        );
      }

      if (json.savings) {
        savvy.savings = json.savings.map(s =>
          new Savings(
            s.title,
            s.endDate,
            new Category(s.category.label, s.category.icon),
            new Amount(s.amount.value, s.amount.currency)
          )
        );
      }

      if (json.categories) {
        savvy.categories = json.categories.map(c =>
          new Category(c.label, c.icon)
        );
      }

      if (json.currency) {
        savvy.currency = json.currency.map(cur =>
          Currency.fromJSON(cur)
        );
      }

      if (json.settings) {
        savvy.settings = new Settings(
          json.settings.notifications,
          json.settings.sound,
          json.settings.banner,
          json.settings.batch
        );
      }
    } catch (error) {
      console.error("Error deserializing Savvy object:", error);
      throw error;
    }
    return savvy;
  }

}

export default Savvy;
