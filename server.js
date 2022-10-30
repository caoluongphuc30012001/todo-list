import app from "./src/app.js";
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`WSV start with port ${PORT}`);
});
