import express from "express"
import "dotenv/config"
import axios from "axios"

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/api/check', (req, res) => {
    res.status(201).json({success: true, message: "Hello World!"});
})


app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
})


axios.get(process.env.URL);
