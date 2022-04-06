import { isEmpty } from "lodash-es";
import React, { useMemo } from "react";
import { useHistory, useLocation } from "react-router";
import { useQuery } from "../../hooks/useQuery";
import { parseQueryToSearch } from "../../utils/url";
import appData from "virtual:appData";
import { StyledToc, StyledTocItem, StyledTocItemTitle } from "./styled";

const { markdowns } = appData;

const Toc = () => {
  const location = useLocation();
  const query = useQuery();
  const history = useHistory();

  const curr = useMemo(() => {
    return markdowns.find((o) => o.routePath === location.pathname);
  }, [location.pathname]);

  const onClick = (o: ParsedTocItem) => {
    const search = parseQueryToSearch({
      ...query,
      p: o.url.replace("#", ""),
    });

    if (search !== location.search) {
      history.replace({
        pathname: location.pathname,
        search,
      });
    }
  };

  const parse = (o: ParsedTocItem, level?: number) => {
    if (isEmpty(o?.items)) {
      return (
        <StyledTocItem key={o?.title} level={level} empty={true}>
          <StyledTocItemTitle onClick={() => onClick(o)}>
            {o?.title}
          </StyledTocItemTitle>
        </StyledTocItem>
      );
    } else {
      return (
        <StyledTocItem level={level} empty={false} key={o.title}>
          <StyledTocItemTitle onClick={() => onClick(o)}>
            {o.title}
          </StyledTocItemTitle>
          <div>
            {o.items.map((o: any) => {
              return parse(o, level + 1);
            })}
          </div>
        </StyledTocItem>
      );
    }
  };

  return <StyledToc>{parse(curr?.toc, 0)}</StyledToc>;
};

export { Toc };
