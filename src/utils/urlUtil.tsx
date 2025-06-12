const urlUtil = {
  appendWithHttps(url: string) {
    const fullUrl = `https:${url}`;
    return fullUrl.replace("64x64", "128x128");
  },
};

export default urlUtil;
