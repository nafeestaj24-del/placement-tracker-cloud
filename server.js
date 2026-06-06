const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json({ message: "Hello from the EC2 Backend Server!" });
});

app.post('/api/applications', (req, res) => {
    console.log("🚀 Data received from frontend:", req.body);
    res.json({ status: "Success", message: "Application tracked successfully in the cloud!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
