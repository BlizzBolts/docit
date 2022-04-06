import { isEmpty } from "lodash-es";
import { History, Location } from "history";
export const parseSearchToQuery = (search: string) => {
  if (!search) {
    return null;
  }

  return search
    .replace("?", "")
    .split("&")
    .reduce((acc, curr) => {
      const [key, value] = curr.split("=");
      return {
        ...acc,
        [key]: value,
      };
    }, {});
};

export const parseQueryToSearch = (query: { [key: string]: string }) => {
  if (isEmpty(query)) {
    return "";
  }

  return (
    "?" +
    Object.entries(query)
      .reduce((acc, curr) => {
        const [key, value] = curr;
        return [...acc, `${key}=${value}`];
      }, [])
      .join("&")
  );
};
