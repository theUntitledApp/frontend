module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      '@babel/preset-typescript',
    ],
    plugins: [
      [
        'react-native-reanimated/plugin',
      ],
      ["module-resolver", {
        "root": ["./"],
        "extensions": [".tsx", ".ts"],
        "alias": {
          "@components": "./src/components"
        }
      }]
    ]
  };
};
