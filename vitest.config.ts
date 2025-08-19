import {defineConfig} from 'vitest/config';
import pluginVue from '@vitejs/plugin-vue';
import {defineVitestProject} from '@nuxt/test-utils/config';

export default defineConfig({
  test: {
    extends: true,
    projects: [
      {
        plugins: [
          pluginVue(),
        ],
        test: {
          name: 'e2e',
          plugins: [
            pluginVue(),
          ],
          exclude: [
            '**/node_modules/**',
            '**/*.spec.{j,t}s',
          ],
          // Enable browser mode
          browser: {
            enabled: true,
            // Make sure to install Playwright
            provider: 'playwright',
            headless: false,
            instances: [{browser: 'chromium'}],
          },
        },
      },
      await defineVitestProject({
        test: {
          environment: 'nuxt',
          name: 'e2e-nuxt',
          exclude: [
            '**/node_modules/**',
            '**/*.test.{j,t}s',
          ],
          // Enable browser mode
          browser: {
            enabled: true,
            // Make sure to install Playwright
            provider: 'playwright',
            headless: false,
            instances: [{browser: 'chromium'}],
          },
        },
      }),
    ],
    environment: 'jsdom',
    retry: 2,
    // singleThread: true,
    exclude: [
      '**/node_modules/**',
      '**/e2e/**',
      './packages/nuxt/playground/**',
    ],
    typecheck: {
      ignoreSourceErrors: true,
      include: ['./**/?(*.){test,spec}-d.?(c|m)[jt]s?(x)'],
      exclude: [
        '**/node_modules/**',
        '**/examples/**',
        './packages/nuxt/playground/**.ts',
      ],
    },
  },
});
