import React, { PropsWithChildren } from 'react';

const DefaultProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <>{children}</>;
};

export default DefaultProvider;
