import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { parseQueryToSearch } from "../utils/url";
import { useQuery } from "./useQuery";

export const useAnchors = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = useQuery();

  useEffect(() => {
    if (query?.p) {
      const fn = () => {
        const id = query.p;
        const $element = document.getElementById(id);

        if ($element) {
          $element.scrollIntoView(true);
        } else {
          requestAnimationFrame(fn);
        }
      };
      requestAnimationFrame(fn);
    }
  }, [query]);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      const $target = e.target as HTMLElement;
      if (["H1", "H2", "H3"].includes($target.tagName)) {
        const search = parseQueryToSearch({
          ...query,
          p: $target.id,
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
      }
    };

    document.addEventListener("click", fn);
    return () => {
      document.removeEventListener("click", fn);
    };
  }, [location, query]);
};
