import sharedViteConfig, { sanitizePackageName } from '../../../vite.config.shared'
import vue from '@vitejs/plugin-vue'
import ViteYaml from '@modyfi/vite-plugin-yaml'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig, mergeConfig } from 'vite'

// Package name MUST always match the kebab-case package name inside the component's package.json file and the name of your `/packages/{package-name}` directory
const packageName = 'spec-renderer'
const sanitizedPackageName = sanitizePackageName(packageName)

// Merge the shared Vite config with the local one defined below
const config = mergeConfig(sharedViteConfig, defineConfig({
  build: {
    lib: {
      // The kebab-case name of the exposed global variable. MUST be in the format `kong-ui-public-{package-name}`
      // Example: name: 'kong-ui-public-demo-component'
      name: `kong-ui-public-${sanitizedPackageName}`,
      entry: resolve(fileURLToPath(dirname(import.meta.url)), './src/index.ts'),
      fileName: (format) => `${sanitizedPackageName}.${format}.js`,
    },
  },
}))

// We need to override the provided `vue` plugin with a custom config that includes `isCustomElement`
// If additional plugins are added to the root `vite.config.shared.ts`, you'll need to include them here as well
const customPlugins = [
  vue({
    template: {
      compilerOptions: {
        isCustomElement: tag => tag.startsWith('kong-'), // ['kong-swagger-ui'].includes(tag)
      },
    },
  }),
  ViteYaml(), // you may configure the plugin by passing in an object with the options listed below
]

// Replace the existing plugins array with our custom array
config.plugins = customPlugins

// If we are trying to preview a build of the local `package/spec-renderer/sandbox` directory,
// unset the lib, rollupOptions.external and rollupOptions.output.globals properties
if (process.env.USE_SANDBOX) {
  config.build.lib = undefined
  config.build.rollupOptions.external = undefined
  config.build.rollupOptions.output.global = undefined
}

export default config
