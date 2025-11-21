// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sortOjectKeys = (unordered: { [key: string]: any }) => {
  return Object.keys(unordered)
    .sort()
    .reduce(
      (obj, key) => {
        obj[key] = unordered[key];
        return obj;
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {} as { [key: string]: any }
    );
};
