<br>
<p align="center"><strong>text-fields</strong></p>

<div align="center">

[![npm](https://img.shields.io/npm/v/text-fields.svg?colorB=brightgreen)](https://www.npmjs.com/package/text-fields)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/text-fields.svg)](https://github.com/ux-ui-pro/text-fields)
[![NPM Downloads](https://img.shields.io/npm/dm/text-fields.svg?style=flat)](https://www.npmjs.org/package/text-fields)

</div>

<p align="center">The TextFields class is designed to manage and design text fields (input and textarea) according to Material Design principles. The main function of the class is to add visual and functional enhancements to standard HTML form elements.</p>
<p align="center"><sup>1kB gzipped</sup></p>
<p align="center"><a href="https://codepen.io/ux-ui/full/PoxqOvp">Demo</a></p>
<br>

&#10148; **Install**

```console
yarn add text-fields
```
<br>

&#10148; **Import**

```javascript
import TextFields from 'text-fields';
```
```javascript
import 'text-fields/dist/text-fields.css';
```
<sub>if your bundler supports SCSS</sub>
```SCSS
@import "text-fields/src/styles/index.scss";
```
<br>

&#10148; **Usage**

```javascript
document.addEventListener('DOMContentLoaded', () => {
  const textFields = new TextFields();

  textFields.init().then(() => {
    console.log('Text fields are ready!');
  }).catch(error => {
    console.error('Initialization failed:', error);
  });
});
```
<br>

&#10148; **License**

text-fields is released under MIT license
