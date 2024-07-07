import Savings from '../Screens/BudgetSavings/Savings';

describe('Savings Datenstruktur', () => {
  it('hat die richtige Anzahl an Savings-Einträgen', () => {
    expect(Savings.length).toBe(8);
  });

  it('alle Savings-Einträge haben die richtige Struktur', () => {
    Savings.forEach((saving) => {
      expect(saving).toHaveProperty('title');
      expect(saving).toHaveProperty('details');
      expect(saving.details).toHaveProperty('img');
      expect(saving.details).toHaveProperty('amount1');
      expect(saving.details).toHaveProperty('amount2');
      expect(saving.details).toHaveProperty('dateStart');
      expect(saving.details).toHaveProperty('dateEnd');
    });
  });

  it('der erste Saving-Eintrag hat die richtigen Werte', () => {
    const firstSaving = Savings[0];
    expect(firstSaving.title).toBe('Saving1');
    expect(firstSaving.details.img).toBe(require('../Icons/Categories/gaming.png'));
    expect(firstSaving.details.amount1).toBe('500');
    expect(firstSaving.details.amount2).toBe('2000');
    expect(firstSaving.details.dateStart).toBe('25.06.2024');
    expect(firstSaving.details.dateEnd).toBe('25.07.2024');
  });

  it('der zweite Saving-Eintrag hat die richtigen Werte', () => {
    const secondSaving = Savings[1];
    expect(secondSaving.title).toBe('Saving2');
    expect(secondSaving.details.img).toBe(require('../Icons/Categories/gaming.png'));
    expect(secondSaving.details.amount1).toBe('20');
    expect(secondSaving.details.amount2).toBe('2000');
    expect(secondSaving.details.dateStart).toBe('25.06.2024');
    expect(secondSaving.details.dateEnd).toBe('25.07.2024');
  });

  // Weitere Tests für die restlichen Savings können hier hinzugefügt werden
});
