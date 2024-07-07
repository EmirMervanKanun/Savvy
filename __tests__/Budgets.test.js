import Budgets from '../Screens/BudgetSavings/Budgets';

describe('Budgets Datenstruktur', () => {
  it('hat die richtige Anzahl an Budget-Einträgen', () => {
    expect(Budgets.length).toBe(8);
  });

  it('alle Budget-Einträge haben die richtige Struktur', () => {
    Budgets.forEach((budget) => {
      expect(budget).toHaveProperty('title');
      expect(budget).toHaveProperty('details');
      expect(budget.details).toHaveProperty('img');
      expect(budget.details).toHaveProperty('amount1');
      expect(budget.details).toHaveProperty('amount2');
      expect(budget.details).toHaveProperty('dateStart');
      expect(budget.details).toHaveProperty('dateEnd');
    });
  });

  it('der erste Budget-Eintrag hat die richtigen Werte', () => {
    const firstBudget = Budgets[0];
    expect(firstBudget.title).toBe('Games1');
    expect(firstBudget.details.img).toBe(require('../Icons/Categories/gaming.png'));
    expect(firstBudget.details.amount1).toBe('1000');
    expect(firstBudget.details.amount2).toBe('1200');
    expect(firstBudget.details.dateStart).toBe('25.06.2024');
    expect(firstBudget.details.dateEnd).toBe('25.07.2024');
  });

  it('der zweite Budget-Eintrag hat die richtigen Werte', () => {
    const secondBudget = Budgets[1];
    expect(secondBudget.title).toBe('Games2');
    expect(secondBudget.details.img).toBe(require('../Icons/Categories/gaming.png'));
    expect(secondBudget.details.amount1).toBe('500');
    expect(secondBudget.details.amount2).toBe('2000');
    expect(secondBudget.details.dateStart).toBe('25.06.2024');
    expect(secondBudget.details.dateEnd).toBe('25.07.2024');
  });

  // Weitere Tests für die restlichen Budgets können hier hinzugefügt werden
});
