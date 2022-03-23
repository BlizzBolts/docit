import React, { useMemo, useState } from 'react';
import hljs from 'highlight.js';
import { RenderWindow, ShowCodeContainer, ButtonContainer, CodeWindow, } from './styled';
const ShowCode = (props) => {
    const { children, code, lang } = props;
    const [isShowing, setIsShowing] = useState(!Boolean(children));
    const display = useMemo(() => {
        return hljs.highlight(code.replace(/\n\n/g, '\n'), {
            language: lang || 'bash',
        });
    }, [code]);
    const renderCode = () => {
        return (React.createElement("pre", { style: { display: isShowing ? 'block' : 'none', margin: 0 } },
            React.createElement("code", { style: { margin: 0 }, className: "docit-code", dangerouslySetInnerHTML: { __html: display.value } })));
    };
    if (!children) {
        return renderCode();
    }
    return (React.createElement(ShowCodeContainer, null,
        React.createElement(RenderWindow, null,
            React.createElement(React.Fragment, null, children)),
        React.createElement(ButtonContainer, null,
            React.createElement("button", { onClick: () => {
                    setIsShowing((v) => !v);
                } }, "Show Code")),
        React.createElement(CodeWindow, null, renderCode())));
};
export { ShowCode };
//# sourceMappingURL=index.js.map