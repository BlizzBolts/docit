import { createServer } from "vite";

export const start = () => {
  createServer({
    base: "/",
    server: {
      port: 3000,
    },
  }).then((s) => {
    s.listen();
  });
};
