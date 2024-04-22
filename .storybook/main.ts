import type { StorybookViteConfig } from '@storybook/builder-vite';

import { mergeConfig } from 'vite';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const config: StorybookViteConfig = {
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  framework: '@storybook/react',
  staticDirs: ['./static'],
  stories: [
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(j|t)s?(x)',
  ],

  async viteFinal(config, options) {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
      resolve: {
        dedupe: ['@emotion/react'],
      }
    });
  },
};

export default config;
