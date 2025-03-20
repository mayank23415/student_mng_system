import app from "./app";

/**
 * The port number on which the server will listen for incoming requests.
 * It first attempts to use the port number defined in the environment variable `PORT`.
 * If the environment variable is not set, it defaults to port 5000.
 */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
