import type {
  ParserOptions,
  PropItem,
  ComponentDoc} from "react-docgen-typescript";
import {
  withCompilerOptions
} from "react-docgen-typescript";
import type ts from "typescript";
import type { ResolvedComponentProps } from "../types.js";

const getParser = () => {
  const defaultCompilerOptions: ts.CompilerOptions = {
    esModuleInterop: true,
  };

  const defaultParserOptions: ParserOptions = {
    savePropValueAsString: true,
    shouldExtractLiteralValuesFromEnum: true,
    shouldExtractValuesFromUnion: true,
    propFilter: (props: PropItem, component) => {
      const fromNode = props.declarations?.some((o) =>
        o.fileName.includes("@types/node")
      );
      const fromLibDom = props.declarations?.some((o) =>
        o.fileName.includes("typescript/lib/lib.dom.d.ts")
      );
      const isReactType = props.declarations?.some((o) =>
        o.fileName.includes("@types/react")
      );
      const isStyledComponents = props.declarations?.some((o) =>
        o.fileName.includes("@types/styled-components")
      );
      return !fromNode && !fromLibDom && !isReactType && !isStyledComponents;
    },
  };

  return withCompilerOptions(defaultCompilerOptions, defaultParserOptions);
};

export const parser = getParser();

export const resolvePropType = (o: PropItem) => {
  return o.type.raw || o.type.name;
};

export const transformProps = (
  docs: ComponentDoc[]
): ResolvedComponentProps[] => {
  return docs.map((o) => {
    return {
      filePath: o.filePath,
      componentName: o.displayName,
      props: Object.values(o.props).map((propItem: PropItem) => {
        const stat = {
          name: propItem.name,
          type: resolvePropType(propItem),
          isRequired: propItem.required,
          description: propItem.description,
          defaultValue: propItem.defaultValue?.value,
          isEnum: propItem.type.name === "enum",
          enums: propItem.type.value?.map(
            (o: { description?: string; value?: string }) => {
              return {
                value: o.value,
                description: o.description,
              };
            }
          ),
        };
        return stat;
      }),
    };
  });
};

export const parseApi = (p: string): ResolvedComponentProps[] => {
  const parsed = parser.parse(p);
  return transformProps(parsed);
};
