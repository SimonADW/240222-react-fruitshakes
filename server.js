import express from "express";
import cors from "cors";
import fetch from "node-fetch"
import { createServer } from "vite";

const PORT = 4000;
const app = express();

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`);
})
app.use(cors())

app.get("/", async (req, res)=> {
	try {
		const response = await fetch("https://www.fruityvice.com/api/fruit/all");
		const data = await response.json()
		res.json(data)
		console.log(data);
	} catch (error) {
		console.log(error.message);
	}
})
