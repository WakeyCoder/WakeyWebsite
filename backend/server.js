require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080; // 将5000改为5001或其他未被占用的端口

// 提供静态文件服务
app.use(express.static(path.join(__dirname, '../frontend/build')));

// API 路由示例
app.get('/api/hello', (req, res) => {
  res.json({ message: '你好，这是来自觉醒Wakey AI工具箱的问候！' });
});

// 处理所有路由请求，返回前端应用
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`服务器正在端口 ${PORT} 上运行`);
});
