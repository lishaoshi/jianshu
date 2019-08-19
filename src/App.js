import React from 'react';
import {GlobalStyle} from './reset.js';
import {IConGlobalStyle} from './statics/iconfont/iconfont'
import Header from './common/header/header'
function App() {
  return (
    <div>
      <GlobalStyle />
      <IConGlobalStyle></IConGlobalStyle>
      <Header></Header>
    </div>
  );
}

export default App;
