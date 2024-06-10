import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, FlatList, View } from 'react-native';
import COLORS from '../../Components/Farben';
import Header from '../../Components/TextComponents/Header';
import PlaceholderText from '../../Components/TextComponents/PlaceholderText';
import Button from '../../Components/Buttons/Button';

import Registry from '../Onboarding/Registry';

const {width, height} = Dimensions.get('window');

const slides = [

  {
    id: '1',
    image: require('../../Icons/Onboarding/onboarding1.png'),
    title: 'Ausgaben tracken',
    description: 'Nie wieder den Überblick verlieren - mit unserer App behältst du deine Ausgaben im Griff!',
  },

  {
    id: '2',
    image: require('../../Icons/Onboarding/onboarding2.png'),
    title: 'Daueraufträge festlegen',
    description: 'Trage deine Daueraufträge ein und behalte stets im Blick, was du zahlst und wann du Geld erhältst - nie wieder vergisst du, was wichtig ist!',
  },

  {
    id: '3',
    image: require('../../Icons/Onboarding/onboarding3.png'),
    title: 'Sparziele bestimmen',
    description: 'Erreiche deine finanziellen Träume, indem du klare Sparziele setzt und sie mit unserer App spielend leicht erreichst!',
  },

  {
    id: '4',
    image: require('../../Icons/Onboarding/logoOnboarding.png'),
    title: 'Ausgaben tracken',
    description: 'Dein Budget im Griff mit Savvy – Finanzielle Freiheit leicht gemacht!',
  },

];

const Slides = ({ item }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}><Header>{item.title}</Header></Text>
      <Text style={styles.description}><PlaceholderText>{item.description}</PlaceholderText></Text>
    </View>
  );
};

const Onboarding = ({ navigation }) => {

  const [currentIndex, setCurrentSlideIndex] = React.useState(0);

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const Footer = () => {
    return (
      <View style={StyleSheet.footerContainer}>

        {/* Button auf dem letzten Slide */}
        <View style={{ marginBottom: 20 }}>

          {currentSlideIndex == slides.length - 1 ? (
            <View>
              <Button
                text='Los geht`s'
                onPress={() => navigation.navigate("Registry")}
              />
            </View>
          ) : (null)
          }

        </View>

        {/* Circle Indicator*/}
        <View
          style={styles.indicatorContainer}>

          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                setCurrentSlideIndex == index && {
                  backgroundColor: COLORS.primaryDark,
                },
              ]}
            />
          ))}

        </View>

      </View>

    );
  };



  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={slides}
        contentContainerStyle={{ height: height * 0.75 }}
        horizontal
        showsHorizontalScrollIndicator={false}

        renderItem={({ item }) => <Slides item={item} />}

      />
      <Footer />
    </SafeAreaView>
  );
};

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      <Stack.Screen name="Regisrty" component={Registry} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

{/*
export default function Onboarding() {
  return (
    <MyStack />
  );
}
*/}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  image: {
    heigth: '80%',
    width: width,
    resizeMode: 'contain',
  },

  title: {
    marginTop: 20,
    textAlign: 'center',
    color: COLORS.schriftDark,
  },

  description: {
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    color: COLORS.schriftDark,
  },

  footerContainer: {
    height: height * 0.2,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primaryLight,
    marginHorizontal: 3,
  },

});
