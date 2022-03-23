import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Document from './components/Document';
import { Header } from './components/Header';
import { StyledAside, StyledDocument, StyledMain } from './styled';
import { GlobalStyle, CssVariables } from './styled';
import Provider from 'virtual:provider';
const App = () => {
    return (React.createElement(Provider, null,
        React.createElement(CssVariables, null),
        React.createElement(GlobalStyle, null),
        React.createElement(StyledMain, null,
            React.createElement(Header, null),
            React.createElement(StyledAside, null),
            React.createElement(StyledDocument, null,
                React.createElement(Document, null)))));
};
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement("div", { style: { width: 'calc(100vw - 10px)' } },
        React.createElement(HashRouter, null,
            React.createElement(App, null)))), document.getElementById('app'));
//# sourceMappingURL=index.js.map