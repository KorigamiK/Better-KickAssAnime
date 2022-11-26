export const parseJSToObject = (code: string, keys: string[]) => {
  return new Function(code + `; return {${keys.join(',')}};`)();
};
