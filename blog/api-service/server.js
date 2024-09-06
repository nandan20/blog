const express = require('express');
const app = express();

app.use(express.json());

app.get('/posts', (req, res) => {
  res.json([{ id: 1, title: 'First Post', content: 'This is your first blog post.' }]);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API Service running on port ${PORT}`));
