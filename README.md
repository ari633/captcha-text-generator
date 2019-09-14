Captcha Text Generator
===
This is a reactjs component for generating captcha text.
 - automatically generate random text
 - easy to validate
 - easy to customize the style

## Basic usage
### Import the component to your code:
```js
import CaptchaTextGenerator from 'react-captcha-generator';
```
### Add component to your code:
```js
<CaptchaTextGenerator
  result={this.result} //Callback function to get tex
/>
```
### Add callback into your code to get text that has been generate:
```js
  result(text){
    console.log('Random text -->',text)
  }
```
You also can add random text from outside component, this is for easily get the text from your backend server:
```js
<CaptchaTextGenerator
  result={this.result} //Callback function to get text
  originText='' // put your customize random text
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

# Example:
```js
import React from 'react';
import CaptchaTextGenerator from 'captcha-text-generator';

export default class MyApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      captcha: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.result = this.result.bind(this);
  }

  result(text) {
    this.setState({
      captcha: text
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.captcha, this.captchaEnter.value, this.state.captcha === this.captchaEnter.value)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref={ref => this.captchaEnter = ref}  />
          <input type='submit' />
        </form>
        <CaptchaTextGenerator result={this.result} />
      </div>
    );
  }

}
```