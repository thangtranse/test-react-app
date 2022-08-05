# CONFIG ESLint and Husky

## Install package

```bash
npm install --save-dev eslint babel-eslint eslint-config-prettier eslint-config-airbnb-base eslint-plugin-react eslint-plugin-prettier
```

```bash
npm install --save-dev --save-exact prettier
```

- Here docs: [prettier](https://prettier.io/docs/en/install.html)

```bash
npm install husky --save-dev
```

- Here docs: [husky](https://typicode.github.io/husky/#/)

```bash
npm install --save-dev lint-staged
```

- Here docs: [lint-staged](https://github.com/okonet/lint-staged#readme)

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
