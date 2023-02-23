const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware('/api', {
  target: 'https://api.notion.com/v1',
  changeOrigin: true,
  headers: {
    'Notion-Version': '2022-06-28',
    'Authorization': `Bearer ${process.env.API_KEY}`
  },
  pathRewrite: { '^/api': '' }
});

module.exports = function(app) {
  app.use(apiProxy);
};
