import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Document from './components/Document';
import { Header } from './components/Header';
import { StyledAside, StyledDocument, StyledMain } from './styled';
import { GlobalStyle, CssVariables } from './styled';
import Provider from 'virtual:provider';

const App = () => {
  return (
    <Provider>
      <CssVariables />
      <GlobalStyle />
      <StyledMain>
        <Header />
        <StyledAside></StyledAside>
        <StyledDocument>
          <Document />
        </StyledDocument>
      </StyledMain>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <div style={{ width: 'calc(100vw - 10px)' }}>
      <HashRouter>
        <App />
      </HashRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('app')
);
