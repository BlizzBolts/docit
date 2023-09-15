import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

const Styled404Container = styled.div`
  padding: 24px;
`;
const FourOFour = () => {
  const location = useLocation();
  return (
    <Styled404Container>
      <strong>{location.pathname}</strong> 不见了！
    </Styled404Container>
  );
};

export default FourOFour;
