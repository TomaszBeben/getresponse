import { createGlobalStyle } from "styled-components";
import { px2vw } from '../components/utils/px2vw';

export const globalStyle = {
    mainColor: '#FF4500',
    secondaryColor: '#6B8E23',
    textColor: '#D3D3D3',
    textColorBold: '#696969',
    backgroundColorMain: '#FFFAFA',
    backgroundColorSecondary: '#C0C0C0',
}

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    background-color: ${globalStyle.backgroundColorMain};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    border: 1px solid black;
    overflow-wrap: break-word;
  }
  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;