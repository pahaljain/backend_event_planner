import "dotenv/config.js";

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// Routes
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import categoryRouter from "./routes/category.routes.js";
import eventRouter from "./routes/event.routes.js";
import orderRouter from "./routes/order.routes.js";

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/events", eventRouter);
app.use("/api/orders", orderRouter);

// Start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
