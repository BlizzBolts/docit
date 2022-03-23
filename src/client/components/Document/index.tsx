import React, { Suspense } from 'react';
import { routes } from 'virtual:routes';
import { renderRoutes } from 'react-router-config';
import { MDXProvider } from '@mdx-js/react';
import { ShowCode } from '../ShowCode';
import { StyledMarkdown } from './styled';
import { ApiTable } from '../ApiTable';
import { useDefaultRoute } from '../../hooks/useDefaultRoute';
import { ErrorBoundary } from '../ErrorBoundary';

const Document = () => {
  useDefaultRoute();
  return (
    <ErrorBoundary>
      <StyledMarkdown className="docit-markdown">
        <MDXProvider
          components={{
            ShowCode,
            ApiTable,
            Suspense,
            code: (props) => {
              if (props.className) {
                const regexp = new RegExp(/language-(.*)/g);
                props.className.match(regexp);
              }

              return (
                // TODO
                <code
                  className={`${[props.className, 'docit-code'].join(' ')}`}
                  data-lang={RegExp.$1}
                >
                  {props.children}
                </code>
              );
            },
          }}
        >
          <Suspense fallback={<></>}>{renderRoutes(routes)}</Suspense>
        </MDXProvider>
      </StyledMarkdown>
    </ErrorBoundary>
  );
};

export default Document;
