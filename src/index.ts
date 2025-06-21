import express from "express";
import cors from "cors";
import formsRouter from "./routes/forms";

const app = express();

app.use(
  cors()
);

app.use(express.json());

app.use("/api/form", formsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
