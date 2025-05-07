import express from 'express';
import cors from 'cors'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import setupMiddleware from './middleware/middleware.js';
import studentRouter from './route/user.route.js';
import { connectDB } from './config/DBconnect.js';
import courseRouter from './route/course.route.js';
import instructorRouter from './route/instructor.route.js';
import authRouter from './route/auth.route.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// middleware
setupMiddleware(app);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(express.json());

// Api routes
app.use('/',authRouter);
app.use('/',studentRouter);
app.use('/courses',courseRouter);
app.use('/instructors',instructorRouter);



// Serve auth.html by default
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/auth.html'));
});

// Redirect /portal to auth.html
app.get('/', (req, res) => {
  res.redirect('/portal');
});

// Connect to Database first then start server
connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
});

