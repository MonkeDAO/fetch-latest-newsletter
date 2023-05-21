const express = require("express");
const app = express();
const latest = require("./api/latest");
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
app.use(express.json({ extended: false }));

app.use("/api/latest", latest);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));