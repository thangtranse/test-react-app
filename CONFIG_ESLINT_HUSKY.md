# CONFIG ESLint and Husky

## Install package

```bash
npm install --save-dev eslint babel-eslint eslint-config-prettier eslint-config-airbnb-base eslint-plugin-react eslint-plugin-prettier
```

Tạo file .eslinrc và config cho Eslint:

```js
{
  "env": {
    "es6": true,
      "browser": true
    },
  "extends": [
    "airbnb-base"
  ],
    "parser": "babel-eslint",
      "parserOptions": {
    "ecmaVersion": 2018,
      "sourceType": "module",
        "ecmaFeatures": {
      "impliedStrict": true,
        "jsx": true
    }
  }
}
```

Thiết lập husky và lint-staged

```js
  "scripts": {
    "start": "react-scripts start",
    "lint:fix": "eslint src/*.js --fix",
    "lint": "eslint src/*.js",
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.(js|css)": [
      "prettier --write",
      "git add"
    ],
    ".js": [
      "npm run lint:fix",
      "npm run lint"
    ]
  },
```
