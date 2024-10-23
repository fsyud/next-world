/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "netlify",
  server: "./server.js", // Netlify 需要一个自定义服务器
  ignoredRouteFiles: ["**/.*"],
};
