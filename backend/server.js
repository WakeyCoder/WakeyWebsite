const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080; // 将5000改为5001或其他未被占用的端口

// 提供静态文件服务
app.use(express.static(path.join(__dirname, '../frontend/build')));

// 处理所有路由请求，返回前端应用
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`服务器正在端口 ${PORT} 上运行`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`端口 ${PORT} 已被占用。请尝试使用不同的端口或关闭占用该端口的进程。`);
  } else {
    console.error('启动服务器时发生错误:', err);
  }
  process.exit(1);
});
