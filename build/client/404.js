import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
const Styled404Container = styled.div `
  padding: 24px;
`;
const FourOFour = () => {
    const location = useLocation();
    return (React.createElement(Styled404Container, null,
        React.createElement("strong", null, location.pathname),
        " \u4E0D\u89C1\u4E86\uFF01"));
};
export default FourOFour;
//# sourceMappingURL=404.js.map