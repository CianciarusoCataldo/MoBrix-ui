# MoBrix-ui <img align="left" alt="" src="https://github.com/user-attachments/assets/6320466c-4270-4838-b949-51c78c8d0679" width="60px" />

![NPM](https://img.shields.io/npm/l/mobrix-ui?label=License&style=for-the-badge)
![npm (scoped)](https://img.shields.io/npm/v/mobrix-ui?color=orange%20&label=Latest%20version&style=for-the-badge&logo=npm)
![Maintenance](https://img.shields.io/maintenance/yes/2025?label=Maintained&style=for-the-badge)

<br>

<p align="center">
<img alt="" src="https://github.com/user-attachments/assets/ebe89187-4d1e-4d67-844e-6ac0e5d8ad69" width="400px" />
</p>

<br>

Smart React components for every app, easily customizable for every purpose.

<br>

![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/mobrix-ui?label=Package%20size&logo=npm)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg?logo=jest)](https://github.com/facebook/jest)
[![MoBrix-ui CI](https://github.com/CianciarusoCataldo/mobrix-ui/actions/workflows/mobrix-ui.yml/badge.svg?branch=main)](https://github.com/CianciarusoCataldo/mobrix-ui/actions/workflows/mobrix-ui.yml)
<a href="https://snyk.io/test/github/CianciarusoCataldo/mobrix-ui">
<img src="https://snyk.io/test/github/CianciarusoCataldo/mobrix-ui/badge.svg?targetFile=package.json&style=for-the-badge" height="20px"/>
</a>

<br>

---

<br>

> ## Note for older MoBrix-ui version
>
> If you still want to use older MoBrix-ui versions, check [older MoBrix-ui versions guides](https://cianciarusocataldo.github.io/mobrix-ui/docs/old-guides) .
>
> (Upgrade it to v4.X.X if possible!)
>
> <br>

<br>

---

## Summary

- [MoBrix-ui philosophy](#mobrix-ui-philosophy)
- [Components building process](#components-building-process)
  - [Shared Properties](#shared-properties)
  - [CSS variables](#css-variables)
  - [Reactive components](#reactive-components)
- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Tests](#tests)
- [Authors](#authors)
- [License](#license)

<br>

---

<br>

Check out the [official MoBrix-ui guide page](https://cianciarusocataldo.github.io/mobrix-ui/docs) for more details

---

## MoBrix-ui philosophy

This library is built upon few (but important) concepts:

- Small library size, to not impact on final app bundle size
- Few dependencies, to not introduce a bunch of additional packages (that could also introduce bugs or version conflicts with pre-existent packages)
- Let the user customize every part as desired, but with default values set otherwise, to make every component ready to be used without so many parameters
- Every component should be integrable into every react app, so their behaviour must be easily customizable too

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

MoBrix-ui components shares some properties:

<!-- prettier-ignore -->
<!-- prettier-ignore -->
| <div style='text-align:center;margin:auto;'>Parameter</div> | <div style='text-align:center;margin:auto;'>Type</div> | <div style='text-align:center;margin:auto;'>Default</div> |
| ----------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[key](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#key)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[className](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#classname)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#dark)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[hide](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hide)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[id](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#id)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[shadow](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#shadow)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div> |
| <div style='text-align:center;margin:auto;'>[style](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#style)</div> | <div style='text-align:center;margin:auto;'>CSSProperties</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[unstyled](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#unstyled)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[animated](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#animated)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div> |
| <div style='text-align:center;margin:auto;'>[animation](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#animation)</div> | <div style='text-align:center;margin:auto;'>`fade-in` &#124; `slide-in-left` &#124; `slide-in-right` &#124; `slide-in-top` &#124; `shake`</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[background](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#background)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div> |
| <div style='text-align:center;margin:auto;'>[hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#hover)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div> |
| <div style='text-align:center;margin:auto;'>[active](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#active)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[disabled](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#disabled)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>false</div> |
| <div style='text-align:center;margin:auto;'>[onKeyDown](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#onkeydown)</div> | <div style='text-align:center;margin:auto;'>(keyEvent : any) => void</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onFocus](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#onfocus)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[onFocusLost](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#onfocuslost)</div> | <div style='text-align:center;margin:auto;'>() => void</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[props](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#props)</div> | <div style='text-align:center;margin:auto;'>Record<string, any></div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[a11y](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#a11y)</div> | <div style='text-align:center;margin:auto;'>boolean</div> | <div style='text-align:center;margin:auto;'>true</div> |
| <div style='text-align:center;margin:auto;'>[a11yLabel](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#a11ylabel)</div> | <div style='text-align:center;margin:auto;'>string</div> | <div style='text-align:center;margin:auto;'>/</div> |
| <div style='text-align:center;margin:auto;'>[tabIndex](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/props/#tabindex)</div> | <div style='text-align:center;margin:auto;'>number &#124; string</div> | <div style='text-align:center;margin:auto;'>/</div> |

<br>

Check out the [complete components list](https://cianciarusocataldo.github.io/mobrix-ui/docs/components/) for more details

<br>

### CSS variables

<br>

MoBrix-ui is globally configurable, with CSS variables. By defining some specific custom CSS variables into your app css, you'll change the UI of all components:

| <div style='text-align:center;margin:auto;'>Css variable</div>                                                                                                                                 | <div style='text-align:center;margin:auto;'>Fallback</div>                                                                                                                         | <div style='text-align:center;margin:auto;'>Default</div>                                                                                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <div style='text-align:center;margin:auto;'>[--mbx-background](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background)</div>                                     | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                                       |
| <div style='text-align:center;margin:auto;'>[--mbx-background-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-light)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-background](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background)</div>                         | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #fff, #ededee, #e6e7e7)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #fff, #ededee, #e6e7e7);margin:auto; width:15px; height:15px;'/></div></div></div>       |
| <div style='text-align:center;margin:auto;'>[--mbx-background-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-dark)</div>                           | <div style='text-align:center;margin:auto;'>[--mbx-background](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background)</div>                         | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #2d3748, #1d232e)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #2d3748, #1d232e);margin:auto; width:15px; height:15px;'/></div></div></div>                   |
| <div style='text-align:center;margin:auto;'>[--mbx-background-color](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                                       |
| <div style='text-align:center;margin:auto;'>[--mbx-background-color-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-background-color](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color)</div>             | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#e9e9e9</div><div style='text-align:center;margin-auto;'><div style='background:#e9e9e9;margin:auto; width:15px; height:15px;'/></div></div></div>                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-background-color-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-background-color](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color)</div>             | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#1d232e</div><div style='text-align:center;margin-auto;'><div style='background:#1d232e;margin:auto; width:15px; height:15px;'/></div></div></div>                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-background-color-hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color-hover)</div>             | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                                       |
| <div style='text-align:center;margin:auto;'>[--mbx-background-color-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color-hover-light)</div> | <div style='text-align:center;margin:auto;'>[--mbx-background-color-hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#dfeaf8</div><div style='text-align:center;margin-auto;'><div style='background:#dfeaf8;margin:auto; width:15px; height:15px;'/></div></div></div>                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-background-color-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color-hover-dark)</div>   | <div style='text-align:center;margin:auto;'>[--mbx-background-color-hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-color-hover)</div> | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#3a3552</div><div style='text-align:center;margin-auto;'><div style='background:#3a3552;margin:auto; width:15px; height:15px;'/></div></div></div>                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-background-hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover)</div>                         | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                                       |
| <div style='text-align:center;margin:auto;'>[--mbx-background-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover-light)</div>             | <div style='text-align:center;margin:auto;'>[--mbx-background-hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover)</div>             | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #ececec, #e1e1e6, #dbdddd)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #ececec, #e1e1e6, #dbdddd);margin:auto; width:15px; height:15px;'/></div></div></div> |
| <div style='text-align:center;margin:auto;'>[--mbx-background-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover-dark)</div>               | <div style='text-align:center;margin:auto;'>[--mbx-background-hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-background-hover)</div>             | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>linear-gradient(to right, #364257, #252d3b)</div><div style='text-align:center;margin-auto;'><div style='background:linear-gradient(to right, #364257, #252d3b);margin:auto; width:15px; height:15px;'/></div></div></div>                   |
| <div style='text-align:center;margin:auto;'>[--mbx-text](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text)</div>                                                 | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                                       |
| <div style='text-align:center;margin:auto;'>[--mbx-text-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-light)</div>                                     | <div style='text-align:center;margin:auto;'>[--mbx-text](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text)</div>                                     | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#1b1b1b</div><div style='text-align:center;margin-auto;'><div style='background:#1b1b1b;margin:auto; width:15px; height:15px;'/></div></div></div>                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-text-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-dark)</div>                                       | <div style='text-align:center;margin:auto;'>[--mbx-text](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text)</div>                                     | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>white</div><div style='text-align:center;margin-auto;'><div style='background:white;margin:auto; width:15px; height:15px;'/></div></div></div>                                                                                               |
| <div style='text-align:center;margin:auto;'>[--mbx-text-hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover)</div>                                     | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                                       |
| <div style='text-align:center;margin:auto;'>[--mbx-text-hover-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-light)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-text-hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover)</div>                         | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#413c5c</div><div style='text-align:center;margin-auto;'><div style='background:#413c5c;margin:auto; width:15px; height:15px;'/></div></div></div>                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-text-hover-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover-dark)</div>                           | <div style='text-align:center;margin:auto;'>[--mbx-text-hover](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-text-hover)</div>                         | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#dfeaf8</div><div style='text-align:center;margin-auto;'><div style='background:#dfeaf8;margin:auto; width:15px; height:15px;'/></div></div></div>                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-shadow](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-shadow)</div>                                             | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                                       |
| <div style='text-align:center;margin:auto;'>[--mbx-shadow-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-shadow-light)</div>                                 | <div style='text-align:center;margin:auto;'>[--mbx-shadow](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-shadow)</div>                                 | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#464545</div><div style='text-align:center;margin-auto;'><div style='background:#464545;margin:auto; width:15px; height:15px;'/></div></div></div>                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-shadow-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-shadow-dark)</div>                                   | <div style='text-align:center;margin:auto;'>[--mbx-shadow](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-shadow)</div>                                 | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#464545</div><div style='text-align:center;margin-auto;'><div style='background:#464545;margin:auto; width:15px; height:15px;'/></div></div></div>                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-focus-color](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-focus-color)</div>                                   | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                | <div style='text-align:center;margin:auto;'>/</div>                                                                                                                                                                                                                                                                                       |
| <div style='text-align:center;margin:auto;'>[--mbx-focus-color-light](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-focus-color-light)</div>                       | <div style='text-align:center;margin:auto;'>[--mbx-focus-color](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-focus-color)</div>                       | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#7785ff</div><div style='text-align:center;margin-auto;'><div style='background:#7785ff;margin:auto; width:15px; height:15px;'/></div></div></div>                                                                                           |
| <div style='text-align:center;margin:auto;'>[--mbx-focus-color-dark](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-focus-color-dark)</div>                         | <div style='text-align:center;margin:auto;'>[--mbx-focus-color](https://cianciarusocataldo.github.io/mobrix-ui/docs/shared/css-vars/#-mbx-focus-color)</div>                       | <div style='text-align:center;margin:auto;'><div><div style='text-align:center;margin-auto;'>#fb7a10</div><div style='text-align:center;margin-auto;'><div style='background:#fb7a10;margin:auto; width:15px; height:15px;'/></div></div></div>                                                                                           |

<br>

Check out the [complete components list](https://cianciarusocataldo.github.io/mobrix-ui/docs/components/) for more details

<br>

### Reactive components

<br>

Some components are designed with a specific structure, to sync their internal state with an external input value. This kind of component handle internally their actual value, using the `value` parameter as starting point. This let the component to be driven in 2 different way:

- Internally, Its internal `value`, when using the component without changing its value parameter from code

- External, passing the `value` parameter

So, we have 2 scenarios:

- If you change the component value
  using the component (without changing the `value` parameter), it will be updated internally.

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
  document.getElementById("root"),
);
```

[![Try it !](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/devbox/mobrix-ui-sandbox-y83g7f?file=%2Fsrc%2FApp.js&embed=1)

<br>

If you want to customize the UI globally, initialize the dedicated [CSS variables](#customizable-ui):

```css
* {
  --mbx-text: #f5f5f5;
  --mbx-background-color: #1b1b1b;
  --mbx-container-background: green;
  --mbx-card-background: orange;
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

## <br>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
