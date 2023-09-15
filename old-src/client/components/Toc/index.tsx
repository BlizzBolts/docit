import { isEmpty } from "lodash-es";
import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import appData from "virtual:appData";
import { useQuery } from "../../hooks/useQuery";
import { parseQueryToSearch } from "../../utils/url";
import {
  StyledToc,
  StyledTocItem,
  StyledTocItemTitle,
  StyledTocTitle,
} from "./styled";

const { markdowns } = appData;

const Toc = () => {
  const location = useLocation();
  const query = useQuery();
  const navigate = useNavigate();

  const curr = useMemo(() => {
    return markdowns.find((o) => o.routePath === location.pathname);
  }, [location.pathname]);

  const onClick = (o: ParsedTocItem) => {
    const search = parseQueryToSearch({
      ...query,
      p: o.url.replace("#", ""),
    });

    if (search !== location.search) {
      navigate(
        {
          pathname: location.pathname,
          search,
        },
        { replace: true }
      );
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
          {o.items.map((o: any) => {
            return parse(o, level + 1);
          })}
        </StyledTocItem>
      );
    }
  };

  return isEmpty(curr?.toc) ? null : (
    <StyledToc>
      <StyledTocTitle>Table of Content</StyledTocTitle>
      {parse(curr?.toc, 0)}
    </StyledToc>
  );
};

export { Toc };
