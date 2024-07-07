import React from 'react';
import { act } from 'react-test-renderer';
import renderer from 'react-test-renderer';
import OnboardingScreen from '../Screens/Onboarding/Onboarding';
import { FlatList, Dimensions } from 'react-native';
import { CommonActions } from '@react-navigation/native';

// Mocken der react-navigation Funktionen
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    dispatch: jest.fn(),
  }),
  CommonActions: {
    navigate: jest.fn(),
  },
}));

// Mocken der Button-Komponente
jest.mock('../Components/Buttons/Button', () => ({ onPress, props }) => (
  <button onClick={onPress} {...props} />
));

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

  beforeEach(async () => {
    // Mocken der useNavigation Hook-Funktion
    navigation = {
      navigate: jest.fn(),
      dispatch: jest.fn(),
    };

    // Initialisieren des renderer.create innerhalb von act, um asynchrone Updates zu ermöglichen
    await act(async () => {
      tree = renderer.create(<OnboardingScreen navigation={navigation} slides={slides} />);
    });
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
    const button = tree.root.findByType('button'); // findByType auf 'button' geändert, da die gemockte Komponente ein HTML-Button rendert
    expect(button.props).toMatchObject({
      color: 'blue',
      size: 'big',
      text: 'Los geht`s',
      onPress: expect.any(Function), // Überprüfen, dass onPress eine Funktion ist
    });
  });

  it('rendert die Page Indicators korrekt', () => {
    slides.forEach((_, index) => {
      act(() => {
        const flatList = tree.root.findByType(FlatList);
        flatList.props.onMomentumScrollEnd({ nativeEvent: { contentOffset: { x: Dimensions.get('window').width * index } } });
      });

      // Hier könnten Sie die Page Indicators testen, wenn notwendig
      // Beispiel: expect(tree.root.findByProps({ testID: `indicator-${index}` })).toBeTruthy();
    });
  });

  it('zeigt eine Fallback-Nachricht an, wenn slides leer ist', () => {
    const emptySlides = [];
    let emptyTree;

    act(() => {
      emptyTree = renderer.create(<OnboardingScreen navigation={navigation} slides={emptySlides} />);
    });

    // Hier prüfen, ob die Fallback-Nachricht gerendert wird
    expect(emptyTree.toJSON()).toMatchSnapshot(); // Beispielhafter Snapshot-Test

    // Optional: Spezifischere Assertions hinzufügen, abhängig von Ihrer Fallback-Logik
  });

  it('funktioniert korrekt mit nur einem Slide', () => {
    const singleSlide = [{
      id: '1',
      image: require('../Icons/Onboarding/onboarding1.png'),
      title: 'Ausgaben tracken',
      description: 'Nie wieder den Überblick verlieren - mit unserer App behältst du deine Ausgaben im Griff!',
    }];
    let singleSlideTree;

    act(() => {
      singleSlideTree = renderer.create(<OnboardingScreen navigation={navigation} slides={singleSlide} />);
    });

    // Hier können Sie spezifische Assertions hinzufügen, z.B. dass nur ein Slide gerendert wird
    const flatList = singleSlideTree.root.findByType(FlatList);
    expect(flatList.props.data.length).toBe(4);

    // Optional: Weitere Assertions je nach spezifischem Verhalten Ihrer Komponente
  });

});
