import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import projectsRoutes from './routes/projectsRoutes.js'
import connectDB from './config/db.js';


dotenv.config()
connectDB()

const port = process.env.PORT || 5000

const app = express()

const corsOptions = {
  origin: true, //included origin as true
  credentials: true,
  ///..other options
};

app.use(cors(corsOptions));

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use('/api/projects', projectsRoutes)
// app.use('/api/installation-models', installationModel)
// app.use('/api/installations', installation)
// app.use('/api/planting', planting)

// app.use(notFound)
// app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))