Captcha Text Generator
===
This is a reactjs component for generating captcha text.
 - automatically generate random text
 - easy to validate
 - easy to customize the style

## Basic usage
### Install
```
npm i captcha-text-generator
```
### Import the component to your code:
```js
import { CaptchaText } from 'captcha-text-generator'
```
### Add component to your code:
```js
<CaptchaText
  length={5}
  onGenerated={(val) => console.log(val)}
/>
```

## Props available:
You also can customize the style using bellow props: 

- height: height for the image
- width: width for the image
- textColor: color for the text
- fontFamily: font family for the text
- fontSize: font size for the text
- paddingLeft: padding left for each text and first text between image
- paddingTop: padding top between image and text
- length: length for text, you can set as many as you want
- background: background for the image
- onGenerated: a callback function once it generated
