import React, { useEffect, useRef, useState } from "react";

const Code = (props) => {
  const ComponentRef = useRef<React.FC>();
  const [_, update] = useState({});

  useEffect(() => {
    props.get().then((res) => {
      const { default: Component } = res;

      ComponentRef.current = Component;

      update({});
    });
  }, []);

  if (!ComponentRef.current) {
    return null;
  }

  return (
    <div>
      <ComponentRef.current />
    </div>
  );
};

export { Code };
