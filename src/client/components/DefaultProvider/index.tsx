import React from 'react';

const DefaultProvider: React.FC = (props) => {
  const { children } = props;
  return <>{children}</>;
};

export default DefaultProvider;
