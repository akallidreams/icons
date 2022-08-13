# Quick start

This is a icon library based on our [design system](https://www.figma.com/file/QfifXKyRUwYppvNLNuLfnE/Components-Akalli?node-id=0%3A1).

## Instalation

`npm i @akalli/icons react-native-svg`

**Example:**

```tsx
<HomeIcon size="20px" color="#4287f5" />
```

# Publish a new version

1.  Replace main with `index.ts` on `package.json`
2.  Delete all dependencies from `package.json`
3.  npm publish

# Development

1.  Replace main with `node_modules/expo/AppEntry.js` in `package.json`
2.  Add all packages again to dependencies in `package.json`
3.  `expo start` or `npm start` and scan QR code on `expo go`

# Dependencies of package.json

```json
  "expo": "~45.0.0",
  "expo-status-bar": "~1.3.0",
  "react": "17.0.2",
  "react-dom": "17.0.2",
  "react-native": "0.68.2",
  "react-native-safe-area-context": "4.2.4",
  "react-native-svg": "12.3.0",
  "react-native-web": "0.17.7",
```
