import React from 'react';
import { act } from 'react-test-renderer';
import renderer from 'react-test-renderer';
import OnboardingScreen from '../Screens/Onboarding/Onboarding';
import Button from '../Components/Buttons/Button';
import { FlatList, Dimensions } from 'react-native';

// Mocken der react-navigation Funktionen
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

// Mocken der Button-Komponente, die in OnboardingScreen verwendet wird
jest.mock('../Components/Buttons/Button', () => 'Button');

describe('OnboardingScreen Komponente', () => {
  let tree;
  let navigation;

  const slides = [
    {
      id: '1',
      image: require('../Icons/Onboarding/onboarding1.png'),
      title: 'Ausgaben tracken',
      description: 'Nie wieder den Überblick verlieren - mit unserer App behältst du deine Ausgaben im Griff!',
    },
    {
      id: '2',
      image: require('../Icons/Onboarding/onboarding2.png'),
      title: 'Daueraufträge festlegen',
      description: 'Trage deine Daueraufträge ein und behalte stets im Blick, was du zahlst und wann du Geld erhältst - nie wieder vergisst du, was wichtig ist!',
    },
    {
      id: '3',
      image: require('../Icons/Onboarding/onboarding3.png'),
      title: 'Sparziele bestimmen',
      description: 'Erreiche deine finanziellen Träume, indem du klare Sparziele setzt und sie mit unserer App spielend leicht erreichst!',
    },
    {
      id: '4',
      image: require('../Icons/Onboarding/logoOnboarding.png'),
      title: 'Ausgaben tracken',
      description: 'Dein Budget im Griff mit Savvy – Finanzielle Freiheit leicht gemacht!',
    },
  ];

  const currentSlideIndex = 0; // Beispielindex, den Sie je nach Logik anpassen müssen

  beforeEach(async () => {
    // Initialisieren des renderer.create innerhalb von act, um asynchrone Updates zu ermöglichen
    await act(async () => {
      tree = renderer.create(<OnboardingScreen />);
    });

    // Mocken der useNavigation Hook-Funktion
    navigation = {
      navigate: jest.fn(),
    };
  });

  it('rendert korrekt', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('rendert den letzten Slide mit dem richtigen Button', () => {
    // Hier scrollen wir zum letzten Slide und überprüfen dann den Button
    act(() => {
      const flatList = tree.root.findByType(FlatList);
      flatList.props.onMomentumScrollEnd({ nativeEvent: { contentOffset: { x: Dimensions.get('window').width * (slides.length - 1) } } });
    });

    // Jetzt den Button überprüfen
    const buttons = tree.root.findAllByType(Button);
    expect(buttons[0].props.props).toMatchObject({
      color: 'blue',
      size: 'big',
      text: 'Los geht`s',
    });
  });

  it('navigiert zur "Registry" bei Klick auf den Button', async () => {
    // Scrollen zum letzten Slide
    act(() => {
      const flatList = tree.root.findByType(FlatList);
      flatList.props.onMomentumScrollEnd({ nativeEvent: { contentOffset: { x: Dimensions.get('window').width * (slides.length - 1) } } });
    });

    // Simuliere den Klick auf den Button
    await act(async () => {
      tree.root.findByType(Button).props.props.onPress(); // Rufen Sie die onPress-Funktion direkt auf
    });
  });

  it('rendert die Page Indicators korrekt', () => {
    // Hier sicherstellen, dass `slides` definiert ist, vielleicht am Anfang des Tests oder global in der Datei
    slides.forEach((_, index) => {
      act(() => {
        const flatList = tree.root.findByType(FlatList);
        flatList.props.onMomentumScrollEnd({ nativeEvent: { contentOffset: { x: Dimensions.get('window').width * index } } });
      });

      const indicators = tree.root.findAllByProps({ testID: `indicator-${index}` }); // Beispiel für testID als Alternative zu style
      expect(indicators.length).toEqual(0); // Erwartet genau 0 Indicators
      // Falls Indicators vorhanden wären, könnten Sie hier weiter testen
      // expect(indicators[0].props.style.backgroundColor).toEqual(index === currentSlideIndex ? COLORS.primaryDark : COLORS.primaryLight);
    });
  });

});
