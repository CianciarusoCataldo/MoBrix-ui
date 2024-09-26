# MoBrix-ui changelog

## Versions

- [4.2.0](#420)
- [4.1.0](#410)
- [4.0.0](#400)
- [3.14.0](#3140)
- [3.13.0](#3130)
- [3.12.0](#3120)
- [3.11.0](#3110)
- [3.10.0](#3100)
- [3.9.0](#390)
- [3.8.0](#380)
- [3.7.0](#370)
- [3.6.0](#360)
- [3.5.0](#350)
- [3.4.0](#340)
- [3.3.0](#330)
- [3.2.0](#320)
- [3.1.0](#310)
- [3.0.0](#300)
- [2.1.0](#210)
- [2.0.0](#200)
- [1.2.0](#120)
- [1.1.0](#110)
- [1.0.0](#100)

<br>

---

## Changes

<br>

### 4.2.0

- New MoBrix-ui logo
- Optimizations
- Clean-up

<br>

### 4.1.0

- `FileChooser` component
- Clean-up
- Refactoring

<br>

### 4.0.0

- New building system, to better handle final bundle size, and with a reduced library size
- Css totally re-defined and cleaned up, with more efficent rules and with less data as possible, to keep a smooth dev experience
- Refactoring
- New `hover` css variables for `CheckBox`, `Toggle`, `Container`, `ExpandableContainer` components
- New `underline` prop for `Link` component
- New `arrowPosition` prop for `ExpandableContainer` component
- New `emptyIcon` and `fullIcon` props for `Rater` and `Review` component, to customize rate icons (`type` and `rateType` props removed)
- `CodeBox` component updated, with a more efficent color system
- `highlight` property removed from `CodeBox` component
- `Review` logo now can be customized, wihout choosing a predefined type (`logo` property now accept a standard JSX.Element)
- UI re-designed for all components
- New `Password` component, a modern password field
- Css vars naming changed, to simplify overall experience, to optimize bundle size and to avoid redundancy:
  - `arrow` instead of `arrow-color`
  - `icon` instead of `icon-color`
  - `text` instead of `text-color`
  - `link-text` instead of `link-color` (for `Link` component)
  - `x` instead of `x-color` (for `DismissableCard` and `Modal` components)
  - `thumb` instead of `thumb-color` (for `Slider` component)
  - `tick` instead of `tick-color` (for `CheckBox` component)
  - `error` instead of `error-color` (for `Spinner` component)
  - `loading` instead of `loading-color` (for `Spinner` component)
  - `success` instead of `success-color` (for `Spinner` component)
  - `today` instead of `today-color` (for `Calendar` and `DatePicker` components)
  - `border` instead of `border-color` (for `Table` component)
  - `field` instead of `formfield` (for `FormField` and `Form` components)
  - `external` instead of `external-color` (for `Toggle` component)
  - `internal` instead of `internal-color` (for `Toggle` component)
  - `on-icon` instead of `icon-on` (for `Toggle` component)
  - `off-icon` instead of `icon-off` (for `Toggle` component)

<br>

### 3.14.0

- Styles optimized
- Big Clean-up, bundle size reduced
- Code refactoring, with more efficent naming
- More styles unified to `data-mbx-scl`
- `Card` and `DismissableCard` better styled
- New `size` prop to specify `Divider` component height

<br>

### 3.13.0

- Styles optimized
- Unified shared classes, to optimize bundle size
- Clean-up
- New `fillOnFocus` feature, to fill icons when focused (similar to `textcolorOnFocus` feature)

<br>

### 3.12.0

- `PackageVersion` component improved, now it auto-updates itself when any relevant prop is changed (like a MoBrix-ui Reactive component)
- Clean-up
- `Drawer` component height fix and close button fix
- `List` component hover fix, now disabled when `onClick` is not set
- New `opacityOnActive` feature, to reduce opacity when a component is clicked (lower than `opacityOnHover` feature)

<br>

### 3.11.0

- `PackageVersion` component
- Clean-up

<br>

### 3.10.0

- `data-mb-enabled` migrated to `data-mbx-attributes` field. If the component is disabled, the `data-mbx-attributes` contains `disabled` string
- `data-mbx-a11y` migrated to `data-mbx-attributes` field. If `a11y = true`, the `data-mbx-attributes` contains `a11y` string
- `data-mbx-animated` migrated to `data-mbx-attributes` field. If `animated = true`, the `data-mbx-attributes` contains `animated` string
- `data-mbx-animation` migrated to `data-mbx-features` field. If `animated = true` and `animation` prop is set, the `data-mbx-features` contains it (with `anim-` prefix, ex. `anim-fade-in`)
- `data-mbx-a11y-dark` removed
- Clean-up

<br>

### 3.9.0

- `arrowClassName` parameter for `Calendar`, `Carousel` and `Drawer` components
- css variables splitted into full theme (for future v4 updates)
- Opacity reduced on hover instead of specific hover colors, to optimize overall library size and in preparation for v4 update
- `data-mbx-features` field, to easily handle multiple features through css selectors
- `data-mbx-hover`, `data-mbx-shadow`, `data-mbx-background` and `data-mbx-dark` unified in a single field, `data-mbx-attributes`

<br>

### 3.8.0

- Ui improvements and fix
- Refactoring
- Bundle size reduced
- New shared property, `animation`, to customize components animation when they are rendered
- New global css variables, to customize shadow colors:
  - `--mbx-shadow`
  - `--mbx-shadow-light`
  - `--mbx-shadow-dark`

### 3.7.0

- `CodeBox` component refactoring:
  - `noCopyButton` properties removed
  - `copyButton` properties used instead (enable/disable copy button)
  - Multiline strings are now supported
- Clean-up

<br>

### 3.6.0

- `Image` component
- Clean-up
- Better automatic release system
- Docs updated

<br>

### 3.5.0

- Clean-up
- Refactoring
- Reduced bundle size
- Comments generator fix
- New automatic release creation system
- New automatic publish system

<br>

### 3.4.0

- `EmbeddedVideo` component
- Clean-up

<br>

### 3.3.0

- Slider fix
- IconButton highlight fix on mobile
- All components now use new building functions (`buildMbxReactiveComponent` and `buildMbxStandardComponent`)

<br>

### 3.2.0

- New DatePicker css vars, to customize its internal modal
  - `--mbx-datepicker-modal-background-light`,
  - `--mbx-datepicker-modal-background-dark`,
  - `--mbx-datepicker-modal-x-color-light`,
  - `--mbx-datepicker-modal-x-color-dark`,
  - `--mbx-datepicker-modal-x-color-hover-light`,
  - `--mbx-datepicker-modal-x-color-hover-dark`
- Clean-up
- New CI workflow to publish MoBrix-ui package to github registry
- Automatic css variables docs generation

<br>

### 3.1.0

- New Card properties (`headerClassName`, `headerProps`, `bodyClassName`, `bodyProps`, `footerClassName`, `footerProps`)
- Clean-up
- Minor improvements

<br>

### 3.0.0

- No more external dependencies
- Totally re-designed css variables system, to fully customize every component at once
- Docs and comments generator
- Global refactoring and huge clean-up

<br>

### 2.1.0

- `TabViewer` component
- Minor fixes

<br>

### 2.0.0

- `Calendar` component
- `DatePicker` component
- `Popup` component
- `Selector` component
- `Slider` component
- `RadioButtonGroup` component
- `RadioButton` component
- `Reactive components` replace old `Box Components`, mantaining only the automatic input value sync with actual value set
- Better overall performance
- Huge cleanup
- Deep refactoring
- Minor fixes

<br>

### 1.2.0

- `Carousel` arrow fix
- `ExpandableContainer` arrow fix
- `FacebookButtons` component

<br>

### 1.1.0

- `readonly` support for `Rater` component
- `Review` component
- Clean-up

<br>

### 1.0.0

- MoBrix-ui-components library setup
