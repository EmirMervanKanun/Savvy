module.exports = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native|@expo-modules-core|expo-modules-core|expo|@expo|@react-navigation|react-navigation|@babel|babel|@jest|jest|react-redux|@react-redux|expo-fonts|@expo-fonts|expo-modules-core|@expo-modules-core|react-native-screens)',
  ],
};
