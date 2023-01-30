module.exports = (api) => {
  // this preset only runs in test env ie while running yarn run test
  const isTest = api.env('test');
  if (isTest) {
    return {
      plugins: [
        // add your plugins here
      ],
      presets: [
        // add your presets here
      ],
    };
  }
};
