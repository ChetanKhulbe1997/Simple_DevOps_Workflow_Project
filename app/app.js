const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevOps Demo</title>
        <style>
          body { font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; background: #f0f2f5; }
          .card { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(241, 10, 118, 0.97); text-align: center; }
          h1 { color: #1ae1e8; }
          p { color: #f50909; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>DevOps Workflow Demo Project by Chetan Khulbe</h1>
          <p>This is my first DevOps project!</p>
          <hr>
          <p>Status: <strong>Running on DevOps Server</strong></p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});