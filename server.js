import express from "express"
import "dotenv/config"
import axios from "axios"
import cors from "cors"

import overview from "./routes/overview.js"
import category from "./routes/category.js"
import channel from "./routes/channel.js"

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get('/api/check', (req, res) => {
    axios.get(process.env.URL);
    res.status(201).json({success: true, message: "Hello World!"});
})

app.use('/api/overview', overview);
app.use('/api/category', category);
app.use('/api/channel', channel);


app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
})


axios.get(process.env.URL);
