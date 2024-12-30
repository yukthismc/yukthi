const path = require('path');

module.exports = {
    entry: './src/index.js',  // Point to the new location of index.js

  output: {
    filename: 'bundle.js',  // Output the bundled file
    path: path.resolve(__dirname, 'dist'),  // Directory for the bundled file
  },
  module: {
    rules: [
      // Your loaders (if you are using Babel, etc.)
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],  // Add other extensions if needed
  },
  mode: 'production',  // Set to 'development' for dev mode
};
