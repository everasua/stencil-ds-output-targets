# @stencil/svelte-output-target

Svelte completely [supports web components](https://custom-elements-everywhere.com/#svelte), however
you may like to wrap your components inside a Svelte component, so it feels more natural to interact
with them inside a Svelte application.

### Usage

First you'll need to add the output target to `stencil.config.ts`.

```ts
import { Config } from '@stencil/core';
import { svelteOutputTarget } from '@stencil/svelte-output-target';

export const config: Config = {
  // ...
  outputTargets: [
    svelteOutputTarget({
      componentCorePackage: 'component-library',
      proxiesFile: '../component-library-svelte/src/proxies.ts',
    }),
    // ...
  ],
};
```

#### Output Target Options

- `legacy:` If `true`, Svelte will generate code that will work in IE9 and IE10, which don't support things like `element.dataset`.
- `accessors:` If `true`, Svelte will generate getters and setters for the component's props. If `false`,
  they will only be created for readonly exported values (i.e. those declared with `const`, `class` and `function`).
- `componentCorePackage:` This is your core Stencil package that contains all your web components.
  In the case of Ionic this is `@ionic/core`.
- `proxiesFile:` This is the file that gets generated by the output target which exports all of your
  auto-generated Svelte components. It's important to note that the directory of the proxies file
  is important too, because a `components` and `svelte` directory will be created for all the
  compiled/uncompiled components.
- `componentBindings:` If for any component you'd like to be able to bind some property `bind:someProp`,
  then you'll need to keep that Svelte property in-sync with the state inside your web component. This
  is usually handled by listening for an event and updating the property based on the `detail` of
  the said event. For example, if we had a `value` property then we could listen for a `change` event
  to keep the prop in-sync, then consumers of the component can use `bind:value`.

For an example configuration see our demo [`component-library`](./packages/example-project/component-library/stencil.config.ts).

### Distribution

First create a `index.ts` file in the `src` directory of your Svelte package.

```ts
import { defineCustomElements } from '@vime/core/loader';

// Export all the auto-generated compiled Svelte components.
export * from 'proxies.ts';

if (typeof window !== 'undefined') {
  defineCustomElements(window);
}
```

Now we need to transpile and export our library, here's some scripts you can add to your `package.json`:

```json
"scripts": {
  "build": "rm -rf dist && npm run build:cjs && npm run build:esm",
  "build:cjs": "tsc --module commonjs --outDir dist/cjs",
  "build:esm": "tsc --module es6 --outDir dist/esm",
}
```

If you want consumers of your package to be able to use the uncompiled Svelte components then
add a `svelte` key to your `package.json`. Here's an example:

```json
{
  "name": "@my-project/svelte",
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "svelte": "src/svelte/index.js",
  "types": "dist/types/index.d.ts",
  "files": ["src/", "dist/"]
}
```

### Consumption

We can simply import the components we need after installing the package.

```ts
import { MyComponent } from '@my-project/svelte';
```

[npm-badge-react]: https://img.shields.io/npm/v/@stencil/react-output-target.svg
[npm-badge-react-url]: https://www.npmjs.com/package/@stencil/react-output-target
[npm-badge-angular]: https://img.shields.io/npm/v/@stencil/angular-output-target.svg
[npm-badge-angular-url]: https://www.npmjs.com/package/@stencil/angular-output-target
[npm-badge-vue]: https://img.shields.io/npm/v/@stencil/vue-output-target.svg
[npm-badge-vue-url]: https://www.npmjs.com/package/@stencil/vue-output-target
[npm-badge-svelte]: https://img.shields.io/npm/v/@stencil/svelte-output-target.svg
[npm-badge-svelte-url]: https://www.npmjs.com/package/@stencil/svelte-output-target
[npm-license-react ]: https://img.shields.io/npm/l/@stencil/react-output-target.svg
[npm-license-react-url]: https://github.com/ionic-team/stencil-ds-plugins/blob/main/packages/react-output-target/LICENSE.md
[npm-license-angular ]: https://img.shields.io/npm/l/@stencil/angular-output-target.svg
[npm-license-angular-url]: https://github.com/ionic-team/stencil-ds-plugins/blob/main/packages/angular-output-target/LICENSE.md
[npm-license-vue ]: https://img.shields.io/npm/l/@stencil/vue-output-target.svg
[npm-license-vue-url]: https://github.com/ionic-team/stencil-ds-plugins/blob/main/packages/vue-output-target/LICENSE.md