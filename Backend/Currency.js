import CurrencyController from './CurrencyController.js';

class Currency{
    euro= new CurrencyController('€', 'Euro', 'EUR');
    dollar= new CurrencyController('$', 'Dollar', 'USD');
    pound= new CurrencyController('£', 'Pfund', 'GBP');
    yen= new CurrencyController('¥', 'Yen', 'JPY');
    rupee= new CurrencyController('₹', 'Rupee', 'INR');
    ruble= new CurrencyController('₽', 'Ruble', 'RUB');
    yuan= new CurrencyController('¥', 'Yuan', 'CNY');
    won= new CurrencyController('₩', 'Won', 'KRW');
}

