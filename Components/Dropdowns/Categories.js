import React, { useState, useEffect } from "react";
import { StyleSheet, Image, TouchableOpacity, View, Text } from "react-native";
import ButtonText from "../TextComponents/ButtonText";
import PlaceholderText from "../TextComponents/PlaceholderText";
import COLORS from "../Farben";

const categories = [
  { label: 'Wähle eine Kategorie aus...', icon: null },
  { label: 'Gaming', icon: require('../../Icons/Categories/gaming.png') },
  { label: 'Geräte', icon: require('../../Icons/Categories/devices.png') },
  { label: 'Haustiere', icon: require('../../Icons/Categories/pets.png') },
  { label: 'Kleidung', icon: require('../../Icons/Categories/clothes.png') },
  { label: 'Lebensmittel', icon: require('../../Icons/Categories/groceries.png') },
  { label: 'Medikamente', icon: require('../../Icons/Categories/medication.png') },
  { label: 'Miete', icon: require('../../Icons/Categories/rent.png') },
  { label: 'Musik', icon: require('../../Icons/Categories/music.png') },
  { label: 'Party', icon: require('../../Icons/Categories/party.png') },
  { label: 'Reisen', icon: require('../../Icons/Categories/traveling.png') },
  { label: 'Sport', icon: require('../../Icons/Categories/sports.png') },
  { label: 'Transportation', icon: require('../../Icons/Categories/transportation.png') },
];

const CategoriesDropdown = () => {
  const placeholder = categories[0].label;
  const [selectedData, setSelectedData] = useState(placeholder);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownSelector}
        onPress={() => setIsClicked(!isClicked)}
      >
        <View style={styles.dropdownAuswahl}>
          {selectedIcon && <Image source={selectedIcon} style={{ width: 32, height: 32 }} />}
          <Text style={styles.fontColor}>
            <ButtonText style={styles.text}>{selectedData}</ButtonText>
          </Text>
        </View>
        <Image
          source={
            isClicked
              ? require('../../Icons/Objects/arrowDropup.png')
              : require('../../Icons/Objects/arrowDropdown.png')
          }
          style={styles.icon}
        />
      </TouchableOpacity>
      {isClicked && (
        <View style={styles.dropdownArea}>
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownItem}
              onPress={() => {
                setSelectedData(item.label);
                setSelectedIcon(item.icon);
                setIsClicked(false);
              }}
            >
              <View style={styles.itemContent}>
                {item.icon && <Image source={item.icon} style={{ width: 32, height: 32 }} />}
                <Text style={styles.fontColor}>
                  <PlaceholderText>{item.label}</PlaceholderText>
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

export default CategoriesDropdown;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  dropdownAuswahl: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  dropdownSelector: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 15,
    height: 48,
    width: 292,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: COLORS.primaryDark,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.41,
    elevation: 5,
    zIndex: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  dropdownArea: {
    width: 292,
    backgroundColor: COLORS.primaryLight,
    borderRadius: 15,
    transform: [{ translateY: -48 }],
    marginBottom: -48,
  },
  dropdownItem: {
    width: 260,
    height: 48,
    justifyContent: 'center',
    alignSelf: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: COLORS.schriftMid,
  },
  itemContent: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  fontColor: {
    color: COLORS.schriftDark,
  },
});
