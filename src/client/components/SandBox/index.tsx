import React, { useEffect } from "react";
import sandboxes from "virtual:sandboxes";

const Sandbox: React.FC = () => {
  useEffect(() => {
    // Object.entries(a).forEach(([key, value]) => {
    //   console.log(key);
    //   console.log(typeof value);

    //   // value().then(console.log);
    // });
    console.log(sandboxes);
  }, []);
  return <div>123</div>;
};

export default Sandbox;
