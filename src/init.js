import app from "./server.js";

const PORT = 5500;

const handleListening = () => {
	console.log(`Server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
