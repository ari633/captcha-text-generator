import React from 'react';

export default class CaptchaText extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      height: this.props.height ? this.props.height : 100,
      width: this.props.width ? this.props.width : 200,
      textColor: this.props.textColor
        ? this.props.textColor
        : '#e50446',
      fontFamily: this.props.fontFamily
        ? this.props.fontFamily
        : 'Arial',
      fontSize: this.props.fontSize ? this.props.fontSize : '30',
      paddingLeft: this.props.paddingLeft
        ? this.props.paddingLeft
        : '30',
      paddingTop: this.props.paddingTop
        ? this.props.paddingTop
        : '60',
      lenght: this.props.lenght ? this.props.lenght : '5',
      background: this.props.background
        ? this.props.background
        : '#000',
      originText: this.props.originText
        ? this.props.originText
        : null,
    };
  }

  componentDidMount() {
    this.generateText();
  }

  generateText() {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < this.state.lenght; i++) {
      const char = possible.charAt(
        Math.floor(Math.random() * possible.length)
      );
      text += char;
    }
    this.setState({
      originText: text,
    });
    this.props.result(text);
  }

  renderText() {
    const text = [];
    const { originText } = this.state;
    if (originText) {
      const arrayText = originText.split('');
      for (let i = 0; i < arrayText.length; i++) {
        text.push(
          `<text 
          \n font-family="${this.state.fontFamily}" \n
          font-size="${this.state.fontSize}" \n
          x="${this.state.paddingLeft * i}" \n
          y="${this.state.paddingTop}" \n
          fill="${this.state.textColor}" \n >${arrayText[i]}</text>`
        );
      }
    }
    return text;
  }

  renderImage() {
    const text = this.renderText();
    const svg = btoa(
      `<svg xmlns='http://www.w3.org/2000/svg' height="${
        this.state.height
      }" width="${this.state.width}"> ${text.join()} </svg>`
    );
    const svgSource = `data:image/svg+xml;base64,${svg}`;
    return React.createElement('img', {
      style: {
        background: this.state.background,
        paddingLeft: `${this.state.paddingLeft}px`,
        borderRadius: '4px',
      },
      src: svgSource,
      alt: '',
    });
  }

  render() {
    return <div>{this.renderImage()}</div>;
  }
}
