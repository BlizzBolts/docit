import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { parseSearchToQuery } from "../utils/url";

export const useQuery = (): { [key: string]: string } => {
  const location = useLocation();

  const query = useMemo(() => {
    if (!location.search) return null;

    return parseSearchToQuery(location.search);
  }, [location.search]);

  return query;
};
