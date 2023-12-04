import sharedViteConfig, { sanitizePackageName } from '../../../vite.config.shared'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig, mergeConfig } from 'vite'

// Package name MUST always match the kebab-case package name inside the component's package.json file and the name of your `/packages/{package-name}` directory
const packageName = 'analytics-utilities'
const sanitizedPackageName = sanitizePackageName(packageName)

// Merge the shared Vite config with the local one defined below
const config = mergeConfig(sharedViteConfig, defineConfig({
  build: {
    lib: {
      // The kebab-case name of the exposed global variable. MUST be in the format `kong-ui-public-{package-name}`
      // Example: name: 'kong-ui-public-demo-component'
      name: `kong-ui-public-${sanitizedPackageName}`,
      entry: resolve(fileURLToPath(dirname(import.meta.url)), './src/index.ts'),
      fileName: (format) => format === 'cjs' ? `${sanitizedPackageName}.${format}` : `${sanitizedPackageName}.${format}.js`,
      formats: ['es', 'umd', 'cjs'],
    },
  },
  test: {
    // Include regular `*.spec.ts` files as well as timezone-specific unit test files `*.spec.tz.ts`
    include: ['**/src/**/*.spec(.tz)?.ts'],
  },
}))

// If we are trying to preview a build of the local `package/analytics-utilities/sandbox` directory,
// unset the lib, rollupOptions.external and rollupOptions.output.globals properties
if (process.env.USE_SANDBOX) {
  config.build.lib = undefined
  config.build.rollupOptions.external = undefined
  config.build.rollupOptions.output.global = undefined
}

export default config
