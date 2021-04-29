/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { fontFamily, fontSize, gray2 } from './Styles';
import { createNoSubstitutionTemplateLiteral } from 'typescript';
import { Header } from './Header';
import { HomePage } from './HomePage';
import logo from './logo.svg';

function App() {
  return (
    <div css={css`
      font-family: ${fontFamily};  
      font-size: ${fontSize};
      color: ${gray2};
    `}>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
