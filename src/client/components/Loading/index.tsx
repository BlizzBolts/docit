import React from "react";
import { LoadingProps } from "./types";
import { StyledLoadingContainer } from "./styled";
import { Svgs } from "../Svgs";

const Loading: React.FC<LoadingProps> = (props) => {
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
