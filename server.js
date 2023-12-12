const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/api/v1",
  createProxyMiddleware({
    target: "https://cleanuri.com",
    changeOrigin: true,
    pathRewrite: {
      "^/api/v1": "/api/v1",
    },
  })
);

// Добавляем обработчик для GET запроса на /
app.get("/", (req, res) => {
  res.send("Server is running"); // Отправляем текстовое сообщение об успешном запуске сервера
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
