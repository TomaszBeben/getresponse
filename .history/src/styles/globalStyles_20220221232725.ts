import { createGlobalStyle } from "styled-components";
import { px2vw } from '../components/utils/px2vw';

const mainContainerHeight = 650;

export const globalStyle = {
    mainColor: '#FF4500',
    secondaryColor: '#9ACD32',
    textColor: '#D3D3D3',
    textColorBold: '#696969',
    backgroundColorMain: '#FFFAFA',
    backgroundColorSecondary: '#DCDCDC',

    mainContainerHeight: mainContainerHeight,
    navContanerHeigth: mainContainerHeight / 6,
    mainContentHeigth: (mainContainerHeight / 6) * 5,
}

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    background-color: ${globalStyle.backgroundColorMain};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    overflow-wrap: break-word;
  }
  :root {
      font-size: ${px2vw(22)};

      @media (min-width: 1024px) {
        font-size: ${px2vw(10)};
      }
    }
`;