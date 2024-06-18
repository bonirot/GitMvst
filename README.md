`#react`, `#vite`, `#react-icons`

# GitMvst

![GitMvst](./public/GitMvst.png)

This is an application similar to GitHub where you can search users, go to their prfolie and see the list of their repositories.

## 🛠️ Tools

- [Vite] (https://vitejs.dev)
- [PNPM] (https://www.npmjs.com/package/pnpm)
- [Dotenv] (https://www.npmjs.com/package/dotenv)
- [React-Dom] (https://www.npmjs.com/package/react-dom)
- [React-Router-Dom] (https://www.npmjs.com/package/react-router-dom)
- [React-Icons] (https://react-icons.github.io/react-icons/)
- [Skeleton] (https://www.npmjs.com/package/react-loading-skeleton)
- [Vitest] (https://vitest.dev)

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
