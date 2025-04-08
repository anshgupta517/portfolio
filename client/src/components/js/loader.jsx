export const useLoader = (loader, url) => {
  return new Promise((resolve, reject) => {
    const loaderInstance = new loader();
    loaderInstance.load(url, resolve, null, reject);
  });
};
