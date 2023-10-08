import React from "react";
import { useEffect, useState } from "react";

export interface ICaptchaText {
  height: number,
  width: number,
  textColor: string,
  fontFamily: string,
  fontSize: string,
  paddingLeft: number,
  paddingTop: string,
  length: number,
  background: string,
  onGenerated: (a: string) => void,
}


function generateText(length: number, onGenerate: (a: string) => void): string {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    const char = possible.charAt(
      Math.floor(Math.random() * possible.length)
    );
    text += char;
  }
  onGenerate(text);
  return text;
}

function CaptchaText(props: ICaptchaText) {
  const height = props.height;
  const width = props.width;
  const textColor = props.textColor;
  const fontFamily = props.fontFamily;
  const fontSize = props.fontSize;
  const paddingLeft = props.paddingLeft;
  const paddingTop = props.paddingTop;
  const length = props.length;
  const background = props.background;
  const onGenerated = props.onGenerated;
 
  const [textGenerated, setTextGenerated] = useState('');

  useEffect(() => {
    setTextGenerated(generateText(length, onGenerated))
  }, [length, onGenerated]);

  const renderSvgText = () => {
    const text = [];
    if (textGenerated) {
      const arrayText = textGenerated.split('');
      for (let i = 0; i < arrayText.length; i++) {
        text.push(
          `<text 
          \n font-family="${fontFamily}" \n
          font-size="${fontSize}" \n
          x="${paddingLeft * i}" \n
          y="${paddingTop}" \n
          fill="${textColor}" \n >${arrayText[i]}</text>`
        );
      }
    }
    return text;
  }

  const RenderImage = () => {
    const text = renderSvgText();
    const svg = btoa(
      `<svg xmlns='http://www.w3.org/2000/svg' height="${
        height
      }" width="${width}"> ${text.join()} </svg>`
    );
    const svgSource = `data:image/svg+xml;base64,${svg}`;
    return React.createElement('img', {
      style: {
        background: background,
        paddingLeft: `${paddingLeft}px`,
        borderRadius: '4px',
      },
      src: svgSource,
      alt: '',
    });
  }

  return (
    <>
      <RenderImage />
    </>
  )

}

CaptchaText.defaultProps = {
  height: 100,
  width: 200,
  textColor: '#e50446',
  fontFamily: 'Arial',
  fontSize: '30',
  paddingTop: '60',
  paddingLeft: 40,
  lenght: 5,
  background: '#000000',
  onGenerated: () => {}
}

export default CaptchaText;