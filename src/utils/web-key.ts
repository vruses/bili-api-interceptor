export const useWebKey = (key_url: string) => {
  return key_url.slice(key_url.lastIndexOf("/") + 1, key_url.lastIndexOf("."));
};
