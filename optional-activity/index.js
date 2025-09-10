import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

const arr = [
  { id: 1, name: "First item from my server" },
  { id: 2, name: "Another cool item" },
  { id: 3, name: "Learning Vue is fun!" }
];

//API homepage endpoint
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//API items endpoint
app.get('/api/items', (req, res) => {
  res.json(arr);
});

//server
const server = app.listen(3000, () => {
  console.log(`Server listening at http://${server.address().address}:${server.address().port}`);
});
