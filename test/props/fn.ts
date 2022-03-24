export const toString = (aNumber: number): string => {
  return aNumber.toFixed();
};

export const toNumber = (aString: string): Promise<number> => {
  return Promise.resolve(parseInt(aString));
};
