import React, { useMemo, useState } from 'react';
import { CodeBlockProps } from './types';
import hljs from 'highlight.js';
import {
  RenderWindow,
  ShowCodeContainer,
  ButtonContainer,
  CodeWindow,
} from './styled';

const ShowCode: React.FC<CodeBlockProps> = (props) => {
  const { children, code, lang } = props;

  const [isShowing, setIsShowing] = useState(!Boolean(children));

  const display = useMemo(() => {
    return hljs.highlight(code.replace(/\n\n/g, '\n'), {
      language: lang || 'bash',
    });
  }, [code]);

  const renderCode = () => {
    return (
      <pre style={{ display: isShowing ? 'block' : 'none', margin: 0 }}>
        <code
          style={{ margin: 0 }}
          className="docit-code"
          dangerouslySetInnerHTML={{ __html: display.value }}
        ></code>
      </pre>
    );
  };

  if (!children) {
    return renderCode();
  }

  return (
    <ShowCodeContainer>
      <RenderWindow>
        <>{children}</>
      </RenderWindow>
      <ButtonContainer>
        <button
          onClick={() => {
            setIsShowing((v) => !v);
          }}
        >
          Show Code
        </button>
      </ButtonContainer>
      <CodeWindow>{renderCode()}</CodeWindow>
    </ShowCodeContainer>
  );
};

export { ShowCode };
