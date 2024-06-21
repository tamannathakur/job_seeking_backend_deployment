import app from "./app.js";
import cloudinary from "cloudinary";
import dotenv from 'dotenv';
dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
const cors = require('cors');

const corsOptions = {
  origin: 'https://job-seeking-application-t.netlify.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add methods your frontend uses
  allowedHeaders: ['Content-Type', 'Authorization'], // Add headers your frontend sends
};

app.use(cors(corsOptions));
