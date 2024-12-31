const path = require('path');

module.exports = {
  entry: './src/client/index.js',  // Make sure this points to the correct client-side code

  output: {
    filename: 'main.js',  // Output file name is now 'main.js'
    path: path.resolve(__dirname, 'dist'),  // Directory for the bundled file
  },

  module: {
    rules: [
      // Add any loaders if you're using Babel, Sass, etc.
    ],
  },

  resolve: {
    extensions: ['.js', '.json'],  // Add other extensions if needed
  },

  mode: 'production',  // Set to 'development' for dev mode
};
