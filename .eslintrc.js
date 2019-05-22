module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "extends": "eslint:recommended", 
  "parserOptions": {
    "ecmaVersion": 5
  },
  "overrides": [
    {
      "files": ["test/*"],
      "globals": {
        "describe": "readonly",
        "it": "readonly"
      }
    },
    {
      "files": ["javascript/*"],
      "globals": {
        "define": "readonly",
        "JZZ": "readonly"
      }
    }
  ]
};