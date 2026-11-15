export function cleanUrl(url: string): string {
  try {
    const parsedUrl = new URL(url);
    const isX = /^(www\.)?(x|twitter)\.com$/.test(parsedUrl.hostname); // should be compatible with old twitter links
    if (isX && /\/status\/\d+/.test(parsedUrl.pathname)) {
        parsedUrl.search = "";
        parsedUrl.hash = "";
        return parsedUrl.toString();
    }
  } catch (error) {
  }
  return url;
}