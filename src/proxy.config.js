// const PROXY_CONFIG = [
//   {
//     context: [
//       "/my",
//       "/many",
//       "/endpoints",
//       "/i",
//       "/need",
//       "/to",
//       "/proxy"
//     ],
//     "/api/proxy": {
//       "target": "http://localhost:3000",
//       "secure": false,
//       "bypass": function (req, res, proxyOptions) {
//         if (req.headers.accept.indexOf("html") !== -1) {
//           console.log("Skipping proxy for browser request.");
//           return "/index.html";
//         }
//         req.headers["X-Custom-Header"] = "yes";
//       }
//     },
//     target: "http://localhost:3000",
//     secure: false
//   }
// ];
//
// const HttpsProxyAgent = require('https-proxy-agent');
// const proxyConfig = [{
//   context: '/api',
//   target: 'http://your-remote-server.com:3000',
//   secure: false
// }];
//
// function setupForCorporateProxy(proxyConfig) {
//   const proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
//   if (proxyServer) {
//     const agent = new HttpsProxyAgent(proxyServer);
//     console.log('Using corporate proxy server: ' + proxyServer);
//     proxyConfig.forEach(function (entry) {
//       entry.agent = agent;
//     });
//   }
//   return proxyConfig;
// }
//
// module.exports = PROXY_CONFIG;
// // module.exports = setupForCorporateProxy(proxyConfig);
