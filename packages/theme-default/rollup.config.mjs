import path from "node:path";
import fs from "node:fs";
import { swc, defineRollupSwcOption } from "rollup-plugin-swc3";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";
import alias from "@rollup/plugin-alias";
import panda from "@pandacss/dev/postcss";
import cascade from "@csstools/postcss-cascade-layers";
import { dts } from "rollup-plugin-dts";

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), "./package.json"), {
    encoding: "utf-8",
  })
);

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

export const aliasConfig = [
  { find: "@", replacement: path.join(process.cwd(), "src") },
  {
    find: "@styled-system",
    replacement: path.join(process.cwd(), "styled-system"),
  },
];

const plugins = [
  resolve(),
  commonjs(),
  replace({
    values: {
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    },
    preventAssignment: true,
  }),
  alias({
    entries: aliasConfig,
  }),
  json(),
  swc(
    defineRollupSwcOption({
      tsconfig: "./tsconfig.json",
    })
  ),
  external({
    includeDependencies: true,
  }),
  url(),
  postcss({
    plugins: [panda(), cascade()],
    minimize: true,
    extract: "index.css",
  }),
];

const input = "src/index.ts";

const output = [
  {
    file: pkg.main,
    format: "cjs",
  },
  {
    file: pkg.module,
    format: "es",
  },
];

const rollupConfig = [
  {
    input,
    output,
    plugins: [...plugins, isProd && terser()],
  },
  {
    input,
    output: {
      file: pkg.types,
      format: "es",
    },
    plugins: [...plugins, dts()],
  },
];

export default rollupConfig;
