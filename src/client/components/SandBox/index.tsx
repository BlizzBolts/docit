import { useQuery } from "../../hooks/useQuery";
import React, { useEffect, useRef, useState } from "react";
import sandboxes from "virtual:sandboxes";

const Sandbox: React.FC = () => {
  const query = useQuery();
  const [_, update] = useState({});
  const ComponentRef = useRef<React.FC>(() => <></>);

  useEffect(() => {
    if (sandboxes[query.moduleId]) {
      sandboxes[query.moduleId]().then((res) => {
        const { default: Component } = res;
        ComponentRef.current = Component;
        update({});
      });
    }
  }, []);

  return (
    <div>
      <ComponentRef.current />
    </div>
  );
};

export default Sandbox;
