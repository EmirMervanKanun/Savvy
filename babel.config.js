module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }]
  ]
};






/*
module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
        'babel-preset-expo',
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ]
    ],
  };
};*/