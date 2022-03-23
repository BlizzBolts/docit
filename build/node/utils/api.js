import { withCompilerOptions, } from 'react-docgen-typescript';
const getParser = () => {
    const defaultCompilerOptions = {
        esModuleInterop: true,
    };
    const defaultParserOptions = {
        savePropValueAsString: true,
        shouldExtractLiteralValuesFromEnum: true,
        shouldExtractValuesFromUnion: true,
        propFilter: (props, component) => {
            const fromNode = props.declarations?.some((o) => o.fileName.includes('@types/node'));
            const fromLibDom = props.declarations?.some((o) => o.fileName.includes('typescript/lib/lib.dom.d.ts'));
            const isReactType = props.declarations?.some((o) => o.fileName.includes('@types/react'));
            const isStyledComponents = props.declarations?.some((o) => o.fileName.includes('@types/styled-components'));
            return !fromNode && !fromLibDom && !isReactType && !isStyledComponents;
        },
    };
    return withCompilerOptions(defaultCompilerOptions, defaultParserOptions);
};
export const parser = getParser();
export const resolvePropType = (o) => {
    return o.type.raw || o.type.name;
};
export const transformProps = (docs) => {
    return docs.map((o) => {
        return {
            filePath: o.filePath,
            componentName: o.displayName,
            props: Object.values(o.props).map((propItem) => {
                const stat = {
                    name: propItem.name,
                    type: resolvePropType(propItem),
                    isRequired: propItem.required,
                    defaultValue: propItem.defaultValue?.value,
                    isEnum: propItem.type.name === 'enum',
                    enums: propItem.type.value?.map((o) => {
                        return {
                            value: o.value,
                            description: o.description,
                        };
                    }),
                };
                return stat;
            }),
        };
    });
};
export const parseApi = (p) => {
    const parsed = parser.parse(p);
    return transformProps(parsed);
};
//# sourceMappingURL=api.js.map