/***
 * 此处可以做设备判断进行重定向
 * 先进server route 再进page
 */
export default defineEventHandler((event) => {
  const isMobile = false;
  if (!isMobile) return;
  const res = event.res;
  res.writeHead(302, { Location: "https://www.baidu.com" });
  return res.end();
});
