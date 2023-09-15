import type { PropsWithChildren } from 'react';
import React from 'react';

const DefaultProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  return <>{children}</>;
};

export default DefaultProvider;
