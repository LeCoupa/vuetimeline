<p align="center" style="background: #1b2431; padding: 20px 0;">
  <a href="https://www.growthbunker.dev/vuetimeline" target="_blank">
    <img width="100%" src="https://raw.githubusercontent.com/growthbunker/vuetimeline/master/src/images/vuetimeline.jpg">
  </a>
</p>

[![npm](https://img.shields.io/npm/v/@growthbunker/vuetimeline.svg)](https://www.npmjs.com/package/@growthbunker/vuetimeline)
[![npm](https://img.shields.io/npm/dm/@growthbunker/vuetimeline.svg)](https://npm-stat.com/charts.html?package=@growthbunker/vuetimeline)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/growthbunker/vuetimeline.svg)](http://isitmaintained.com/project/growthbunker/vuetimeline "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/growthbunker/vuetimeline.svg)](http://isitmaintained.com/project/growthbunker/vuetimeline "Percentage of issues still open")
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/growthbunker/vuetimeline/blob/master/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ae3d4112-1c84-4868-b4eb-271c3136ede6/deploy-status)](https://app.netlify.com/sites/growthbunker/deploys)

## Documentation

You can browse the documentation for Vue Timeline [on the website](https://www.growthbunker.dev/vuetimeline).

## Installation

```
npm install @growthbunker/vuetimeline

# Or if you prefer using yarn
yarn add @growthbunker/vuetimeline
```

### Vue.js

In your `main.js` file:

```js
import Vue from "vue"
import vuetimeline from "@growthbunker/vuetimeline"

Vue.use(vuetimeline)
```

### Nuxt.js

Create a new plugin in `plugins/vuetimeline.js`:

```js
import Vue from "vue"
import vuetimeline from "@growthbunker/vuetimeline"

Vue.use(vuetimeline)
```

Add this new plugin to `nuxt.config.js`.

```js
module.exports = {
  // ...
  plugins: [{ src: "@/plugins/vuetimeline.js" }];
}
```

### CDN

Get the latest version from [jsdelivr](https://www.jsdelivr.com/), and import the JavaScript file in your page.

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.5/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@growthbunker/vuetimeline@latest/dist/vuetimeline.min.js"></script>
```

We recommend our users to lock Vue Timeline's version when using CDN. Requesting the latest version (as opposed to "latest major" or "latest minor") is dangerous because major versions usually come with breaking changes. Only do this if you really know what you are doing. [Please refer to jsdelivr.com](https://www.jsdelivr.com/features) for more information.

## Example

Once the plugin is installed, you can use the component like this:

```html
<template>
  <!-- Latest update -->
  <vue-timeline-update
    :date="new Date('2017-02-26')"
    title="v2.2.0 - Initial D"
    description="Today I am thrilled to announce the release of Vue.js 2.2.0."
    thumbnail="/images/vuetimeline/initial_d.jpg"
    category="announcement"
    icon="code"
    color="red"
  />

  <!-- Another update -->
  <vue-timeline-update
    :date="new Date('2016-11-22')"
    title="v2.1.0 - Hunter X Hunter"
    description="Today I am thrilled to announce the release of Vue.js 2.1.0."
    thumbnail="/images/vuetimeline/hunter_x_hunter.jpg"
    category="announcement"
    icon="code"
    color="turquoise"
  />

  <!-- Yet another update -->
  <vue-timeline-update
    :date="new Date('2016-09-30')"
    title="v2.0.0 - Ghost in the Shell"
    description="Today I am thrilled to announce the release of Vue.js 2.0.0"
    thumbnail="/images/vuetimeline/ghost_in_the_shell.jpg"
    category="announcement"
    icon="code"
    color="white"
    is-last
  />
</template>
```

## Contributing

You are more than welcome to contribute to Vue Timeline. Just submit changes via pull request and I will review them before merging.

1. Fork it! 🤙

2. Create your feature branch: `git checkout -b my-new-feature`

3. Commit your changes: `git commit -am "Add some feature"`

4. Push to the branch: `git push origin my-new-feature`

5. Submit a pull request 👍

The documentation is available in the `docs` folder. The Vue Timeline components are available in the `lib` folder.

## License

Vue Timeline is [MIT licensed](LICENSE).
