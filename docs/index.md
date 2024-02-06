# MoBrix-ui

<br>

Smart React components for every app, easily customizable for every purpose.

<br>

![NPM](https://img.shields.io/npm/l/mobrix-ui?label=License&style=for-the-badge)
![npm (scoped)](https://img.shields.io/npm/v/mobrix-ui?color=orange%20&label=Latest%20version&style=for-the-badge&logo=npm)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/mobrix-ui?label=Package%20size&style=for-the-badge&logo=npm)
![Maintenance](https://img.shields.io/maintenance/yes/2025?label=Maintained&style=for-the-badge)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg?logo=jest&style=for-the-badge)](https://github.com/facebook/jest)

<br>

---

## Status

<a href="https://snyk.io/test/github/CianciarusoCataldo/mobrix-ui">
<img src="https://snyk.io/test/github/CianciarusoCataldo/mobrix-ui/badge.svg?targetFile=package.json&style=flat-square" height="27px"/>
</a>

---

<br>

> ## Note for MoBrix-ui v1 user
>
> MoBrix-ui v2 introduces some breaking changes that makes it not compatible with older MoBrix verions (using different lib versions in parallel is possible, but can cause some unexpected errors). If you are using MoBrix 1.X.X, please read the [dedicated guide](https://cianciarusocataldo.github.io/mobrix-ui/docs/#/v1_guide), or upgrade it to v3.X.X!

<br>

> ## Note for MoBrix-ui v2 user
>
> MoBrix-ui v3 introduces some breaking changes that makes it not compatible with older MoBrix verions (using different lib versions in parallel is possible, but can cause some unexpected errors). If you are using MoBrix 2.X.X, please read the [dedicated guide](https://cianciarusocataldo.github.io/mobrix-ui/docs/#/v2_guide), or upgrade it to v3.X.X!

<br>

---
## MoBrix-ui philosophy

This library is built upon few (but important) concepts:

- Small library size, to not impact on final app bundle size
- Few dependencies, to not introduce a bunch of additional packages (that could also introduce bugs or version conflicts with pre-existent packages)
- Let the user customize every part as desired, but with default values set otherwise, to make every component ready to be used without so many parameters
- Every component should be integrable into every react app, so their behaviour must be customizable too (with callbacks, for example)

The same concepts are also the base of another project I maintain, [MoBrix-engine](https://github.com/CianciarusoCataldo/mobrix-engine) (check it out, it is also the base of [MoBrix-ui guide page](https://cianciarusocataldo.github.io/mobrix-ui/) !)

<br>

---
## Components building process

This library use a standardized process to build every component. As result, every component has a shared initial logic, shared CSS styles and shared properties.
Some properties are shared between all components, for a smoother dev experience. In addition, this makes every single component easily re-usable.

<br>

---
### Shared Properties

<br>


<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[key](components/global/props.md#key)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[className](components/global/props.md#classname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[dark](components/global/props.md#dark)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[hide](components/global/props.md#hide)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[id](components/global/props.md#id)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[shadow](components/global/props.md#shadow)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div> |
| <div style='text-align:center;margin:auto;'>[style](components/global/props.md#style)</div> | <div style='text-align:center;margin:auto;'>CSSProperties</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[unstyled](components/global/props.md#unstyled)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[animated](components/global/props.md#animated)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div> |
| <div style='text-align:center;margin:auto;'>[background](components/global/props.md#background)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div> |
| <div style='text-align:center;margin:auto;'>[hover](components/global/props.md#hover)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div> |
| <div style='text-align:center;margin:auto;'>[disabled](components/global/props.md#disabled)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[additionalProps](components/global/props.md#additionalprops)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
<br>

Check out the [complete properties variables](components/props.md) list for more details

<br>

### CSS variables

<br>

MoBrix-ui is globally configurable, with CSS variables. By defining some specific custom CSS variables into your app css, you'll change the UI of all components:


| <div style='text-align:center;margin:auto;'>Prop</div> | <div style='text-align:center;margin:auto;'>Fallback</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ------------------------------------------------------ | ---------------------------------------------------------- | --------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-background](components/global/css-vars.md#mbx-background)</div> | <div style='text-align:center;margin:auto;'>/</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[--mbx-background-light](components/global/css-vars.md#mbx-background-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background](components/global/css-vars.md#mbx-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #fff, #ededee, #e6e7e7)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #fff, #ededee, #e6e7e7);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-background-dark](components/global/css-vars.md#mbx-background-dark)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background](components/global/css-vars.md#mbx-background)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #2d3748, #1d232e)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #2d3748, #1d232e);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-background-color](components/global/css-vars.md#mbx-background-color)</div> | <div style='text-align:center;margin:auto;'>/</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[--mbx-background-color-light](components/global/css-vars.md#mbx-background-color-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-color](components/global/css-vars.md#mbx-background-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#e9e9e9</div><div style='text-align:center;margin-auto;'><div style='background:#e9e9e9;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-background-color-dark](components/global/css-vars.md#mbx-background-color-dark)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-color](components/global/css-vars.md#mbx-background-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#1d232e</div><div style='text-align:center;margin-auto;'><div style='background:#1d232e;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-background-color-hover](components/global/css-vars.md#mbx-background-color-hover)</div> | <div style='text-align:center;margin:auto;'>/</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[--mbx-background-color-hover-light](components/global/css-vars.md#mbx-background-color-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-color-hover](components/global/css-vars.md#mbx-background-color-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#dfeaf8</div><div style='text-align:center;margin-auto;'><div style='background:#dfeaf8;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-background-color-hover-dark](components/global/css-vars.md#mbx-background-color-hover-dark)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-color-hover](components/global/css-vars.md#mbx-background-color-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#3a3552</div><div style='text-align:center;margin-auto;'><div style='background:#3a3552;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-background-hover](components/global/css-vars.md#mbx-background-hover)</div> | <div style='text-align:center;margin:auto;'>/</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](components/global/css-vars.md#mbx-background-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover](components/global/css-vars.md#mbx-background-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #ececec, #e1e1e6, #dbdddd)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #ececec, #e1e1e6, #dbdddd);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-background-hover-dark](components/global/css-vars.md#mbx-background-hover-dark)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-hover](components/global/css-vars.md#mbx-background-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #364257, #252d3b)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #364257, #252d3b);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-text-color](components/global/css-vars.md#mbx-text-color)</div> | <div style='text-align:center;margin:auto;'>/</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[--mbx-text-color-light](components/global/css-vars.md#mbx-text-color-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color](components/global/css-vars.md#mbx-text-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#1b1b1b</div><div style='text-align:center;margin-auto;'><div style='background:#1b1b1b;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-text-color-dark](components/global/css-vars.md#mbx-text-color-dark)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color](components/global/css-vars.md#mbx-text-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>white</div><div style='text-align:center;margin-auto;'><div style='background:white;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover](components/global/css-vars.md#mbx-text-color-hover)</div> | <div style='text-align:center;margin:auto;'>/</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover-light](components/global/css-vars.md#mbx-text-color-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover](components/global/css-vars.md#mbx-text-color-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#413c5c</div><div style='text-align:center;margin-auto;'><div style='background:#413c5c;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover-dark](components/global/css-vars.md#mbx-text-color-hover-dark)</div> | <div style='text-align:center;margin:auto;'>[--mbx-text-color-hover](components/global/css-vars.md#mbx-text-color-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#dfeaf8</div><div style='text-align:center;margin-auto;'><div style='background:#dfeaf8;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-focus-color](components/global/css-vars.md#mbx-focus-color)</div> | <div style='text-align:center;margin:auto;'>/</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[--mbx-focus-color-light](components/global/css-vars.md#mbx-focus-color-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-focus-color](components/global/css-vars.md#mbx-focus-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#7785ff</div><div style='text-align:center;margin-auto;'><div style='background:#7785ff;margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-focus-color-dark](components/global/css-vars.md#mbx-focus-color-dark)</div> | <div style='text-align:center;margin:auto;'>[--mbx-focus-color](components/global/css-vars.md#mbx-focus-color)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#fb7a10</div><div style='text-align:center;margin-auto;'><div style='background:#fb7a10;margin:auto; width:15px; height:15px;'/></div></div></div> |
<br>

Check out the [complete css variables](components/css-vars.md) list for more details

<br>

### Reactive components

<br>

Some components are designed with a specific structure, to sync their internal state with an external input value. This kind of component handle internally their actual value, using the `value` parameter as starting point. This let the component to be driven in 2 different way:

- Internally, Its internal `value`, when using the component without changing its value parameter from code

- External, passing the `value` parameter

So, we have 2 scenarios:

- If you change the component value
  using the component(without changing the `value` parameter), it will be updated internally.

- If you change the passed `value` parameter, the component will sync its value with the given one.

A clear example is the [Input](https://cianciarusocataldo.github.io/mobrix-ui/components/atoms/Input) component. When changing the `value` parameter, the component will sync its actual value.

<br>

---

---

<br>


<br>

<br>

## Getting started

<br>

### Installation

If you want to use this library inside your project, just install it:

```

npm i mobrix-ui

```

<br>

---

### Usage

After installation, you can use every `MoBrix-ui` component in your app. Run this example to see them in action:

```tsx
import { Card, Container, Link } from "mobrix-ui";
import { render } from "react-dom";

render(
  <Container animated>
    <Card
      dark={true}
      body={<p>This page is entirely made with MoBrix-ui components !</p>}
      footer={
        <Link to="https://cianciarusocataldo.github.io/mobrix-ui">
          MoBrix-ui page
        </Link>
      }
    />
  </Container>,
  document.getElementById("root")
);
```

[![Edit MoBrix-ui playground](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/mobrix-ui-playground-gfpbb?file=/src/index.tsx?fontsize=14&hidenavigation=1&theme=dark&view=preview)

<br>

If you want to customize the UI globally, initialize the dedicated [CSS variables](#customizable-ui):

```css
* {
  --mbx-ui-text-color: #f5f5f5;
  --mbx-ui-background-color: #1b1b1b;
}
```

<br>

---

---


<br>

<br>

## Tests

Unit tests for every component are located inside `tests` folder. The test script is executed with pre-defined test command:

    npm run test

<br>

---

## Authors

- [**Cataldo Cianciaruso**](https://github.com/CianciarusoCataldo)

<br>

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details