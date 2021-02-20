// Types
import { ClientTypes } from "../init/types";

const getKeyValue = <K extends keyof T, T extends object>(key: K) => (obj: T) =>
  obj[key];

const filter = (
  array: ClientTypes[] = [],
  filters: Record<string, any> = {}
) => {
  const keys = Object.keys(filters);
  const res = array.filter((elem) => {
    const commonKeys = keys.filter((key) => elem.hasOwnProperty(key));

    return commonKeys.reduce((_, key) => {
      return filters[key].includes(
        getKeyValue<keyof ClientTypes, ClientTypes>("status")(elem)
      );
    }, "");
  });
  return res;
};

export { filter };
