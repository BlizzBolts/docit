import { useQuery } from "../../hooks/useQuery";
import React, { useEffect, useRef, useState } from "react";
import sandboxes from "virtual:sandboxes";
import BottomTools from "../BottomTools/index";
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
    }
  }, []);

  return (
    <StyledSandBox>
      <div style={{ height: "100vh" }}>
        <ComponentRef.current />
      </div>
      <BottomTools moduleId={query.moduleId} />
    </StyledSandBox>
  );
};

export default Sandbox;
