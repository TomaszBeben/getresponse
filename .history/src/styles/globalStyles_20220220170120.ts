import { createGlobalStyle } from "styled-components";
import { px2vw } from '../components/utils/px2vw'

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;
export const globalStyle = {
    mainColor: '#FF4500',
    secondaryColor: '#6B8E23',
    textColor: '#D3D3D3',
    textColorBold: '#696969',
    backgroundColorMain: '#FFFAFA',
    backgroundColorSecondary: '#C0C0C0',
}