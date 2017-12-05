module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  "extends": ["eslint:recommended", "google"],
  "rules": {
    // Additional, per-project rules...
  },
  plugins: ['html']
}
