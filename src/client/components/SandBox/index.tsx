import { useQuery } from "../../hooks/useQuery";
import React, { useEffect, useRef, useState } from "react";
import sandboxes from "virtual:sandboxes";
import IFrameTools from "../IFrameTools/index";
import { StyledSandBox } from "./styled";

const Sandbox: React.FC = () => {
  const query = useQuery();
  const [_, update] = useState({});
  const ComponentRef = useRef<React.FC>(() => <></>);

  useEffect(() => {
    const getter = sandboxes[decodeURI(query.moduleId)];
    if (getter) {
      getter().then((res) => {
        const { default: Component } = res;
        ComponentRef.current = Component;
        update({});
      });
    } else {
      console.warn("No Matching Sandbox!", sandboxes);
      console.log({ query, sandboxes });
    }
  }, []);

  return (
    <StyledSandBox>
      <div style={{ height: "100vh" }}>
        <ComponentRef.current />
      </div>
      <IFrameTools moduleId={query.moduleId} />
    </StyledSandBox>
  );
};

export default Sandbox;
