import React from 'react';
import {GlobalStyle} from './reset.js';
import {IConGlobalStyle} from './statics/iconfont/iconfont'
import Header from './common/header/header'
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <div>
      <GlobalStyle />
      <IConGlobalStyle></IConGlobalStyle>
      <Provider store={store}>
        <Header></Header>
      </Provider>
      
    </div>
  );
}

export default App;
