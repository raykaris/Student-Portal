import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import setupMiddleware from './middleware/middleware.js';
import studentRouter from './route/user.route.js';
import { connectDB } from './config/DBconnect.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// middleware
setupMiddleware(app)

app.use(express.json());
app.use('/students',studentRouter)

// Serve index.html for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Fallback to index.html for unmatched routes 
app.get((request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Connect to Database first then start server
connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
})

