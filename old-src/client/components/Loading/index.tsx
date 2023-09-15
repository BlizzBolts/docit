import type { PropsWithChildren } from "react";
import React from "react";
import { Svgs } from "../Svgs";
import type { LoadingProps } from "./types";
import { StyledLoadingContainer } from "./styled";

const Loading: React.FC<PropsWithChildren<LoadingProps>> = (props) => {
  const { loading, children } = props;

  if (!loading) {
    return <>{children}</>;
  }

  return (
    <StyledLoadingContainer>
      <Svgs.AnimatedLoading width="2em" />
    </StyledLoadingContainer>
  );
};

export { Loading };
