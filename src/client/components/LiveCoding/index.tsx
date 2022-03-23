import React from 'react';
// import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const LiveCoding = () => {
  return (
    <div>stub</div>
    // <LiveProvider
    //   scope={{
    //     Test: React.lazy(() =>
    //       import("../Test").then((o) => {
    //         return { default: o.Test, Test3: o.Test3 };
    //       })
    //     ),
    //     Test3: React.lazy(() =>
    //       import("../Test").then((o) => {
    //         return { default: o.Test3 };
    //       })
    //     ),
    //   }}
    //   code={`
    //     <>
    //       <Test/>
    //       <Test3/>
    //       <Test
    //     </>
    //   `}
    // >
    //   <LiveEditor />
    //   <LiveError />
    //   <Suspense fallback={<div></div>}>
    //     <LivePreview />
    //   </Suspense>
    // </LiveProvider>
  );
};

export { LiveCoding };
