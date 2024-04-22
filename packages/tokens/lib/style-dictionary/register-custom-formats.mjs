import prettier from 'prettier';

/**
 * Format tokens as a TypeScript interface
 * @param {object} tokens
 * @returns {string}
 */
function _generateInterface(tokens) {
  if (tokens.hasOwnProperty('value')) {
    return `${
      tokens.valueType || (_isPrimitiveValueType(tokens.value) ? typeof tokens.value : 'string')
    };`;
  }

  return `{${Object.getOwnPropertyNames(tokens)
    .map((key) => `${_toCamelCase(key)}: ${_generateInterface(tokens[key])}`)
    .join('\n')}};`;
}

/**
 * Format tokens as a JS object normalized for use in TypeScript and Javascript applications
 * @param {object} tokens
 * @returns {string}
 */
function _generateNormalizedObject(tokens) {
  if (tokens.hasOwnProperty('value')) {
    if (typeof tokens.value === 'string') {
      return `"${tokens.value}"`;
    }

    return tokens.value;
  }

  return `{${Object.getOwnPropertyNames(tokens)
    .map((key) => `"${_toCamelCase(key)}": ${_generateNormalizedObject(tokens[key])},`)
    .join('\n')}}`;
}

function _isPrimitiveValueType(value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'undefined' ||
    value === null
  );
}

function _toCamelCase(input) {
  return input
    .split('-')
    .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join('');
}

function registerCustomFormats(StyleDictionary) {
  StyleDictionary.registerFormat({
    name: 'typescript/theme-index',
    formatter({ dictionary }) {
      return prettier.format(
        `
        // Do not edit directly
        // Generated on ${new Date().toUTCString()}

        ${ dictionary.tokens.themes.map(({ value: themeName }) => (
          `export { default as ${_toCamelCase(themeName)}Tokens } from './${themeName}';`
        )).join('\n')}
        `,
        {
          parser: 'typescript',
          printWidth: 100,
          singleQuote: true,
        }
      );
    },
  });

  StyleDictionary.registerFormat({
    name: 'typescript/normalized',
    formatter({ dictionary }) {
      return prettier.format(
        `
        // Do not edit directly
        // Generated on ${new Date().toUTCString()}

        interface DesignTokens ${_generateInterface(dictionary.tokens)}

        const tokens: DesignTokens = ${_generateNormalizedObject(dictionary.tokens)};

        export default tokens;
        `,
        {
          parser: 'typescript',
          printWidth: 100,
          singleQuote: true,
        }
      );
    },
  });
}

export default registerCustomFormats;
