module.exports = function(api) {
  if (api.env("test")) {
    return {
      presets: [
        "@babel/preset-env",
        "@babel/preset-typescript",
        "@babel/preset-react"
      ]
    };
  }
};
