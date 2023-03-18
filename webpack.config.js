const path = require('path');

module.exports = {
  // the rest of your config
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, 'src'),
    },
  },
};
