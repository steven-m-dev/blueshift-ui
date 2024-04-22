import StyleDictionary from 'style-dictionary';
import fs from 'fs';
import registerCustomFormats from './register-custom-formats.mjs';

const TOKEN_ROOT_PATH = './src';
const THEME_NAMES = fs
  .readdirSync(TOKEN_ROOT_PATH, { withFileTypes: true })
  .filter((item) => item.isDirectory())
  .map((item) => item.name);

// Start execution
registerCustomFormats(StyleDictionary);

console.log('Starting Style Dictionary build…');

THEME_NAMES.forEach((themeName) => {
  console.log(`\nProcessing Theme: ${themeName}`);
  StyleDictionary.extend({
    source: [`${TOKEN_ROOT_PATH}/${themeName}/**/*.json`],
    platforms: {
      default: {
        transformGroup: 'web',
        buildPath: `tmp/${themeName}/`,
        files: [
          { destination: 'index.css', format: 'css/variables' },
          { destination: `index.ts`, format: 'typescript/normalized' },
        ],
      },
    },
  }).buildAllPlatforms();
});

console.log(`\nProcessing Theme Index`);
StyleDictionary.extend({
  source: [`${TOKEN_ROOT_PATH}/index.json`],
  platforms: {
    default: {
      transformGroup: 'web',
      buildPath: `tmp/`,
      files: [
        { destination: `index.ts`, format: 'typescript/theme-index' },
      ],
    },
  },
}).buildAllPlatforms();

console.log('\nStyle Dictionary build completed!');
