const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const subscribeRoute = require("./routes/subscribeRoute");
const adminRoutes = require("./routes/adminRoutes");
const productAdminRoutes = require("./routes/productAdminRoutes");
const adminOrderRoutes = require("./routes/adminOrderRoutes");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("WELCOME TO Blitz Bazzar API!");
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api", subscribeRoute);

// Admin
app.use("/api/admin/users", adminRoutes);
app.use("/api/admin/products", productAdminRoutes);
app.use("/api/admin/orders", adminOrderRoutes);

// Check if the VERCEL environment variable exists (Vercel sets this automatically)
// if (process.env.VERCEL) {
// We are in the Vercel environment (or any environment where VERCEL is set)
// Vercel handles the listening part, so we just export the app
module.exports = app;
console.log("Running on Vercel, exporting app..."); // Optional log
// } else {
//   // We are not in Vercel, assume local development
//   // Start the server listener
//   const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000
//   app.listen(PORT, () => {
//     console.log(`Server is running locally on http://localhost:${PORT}`);
//   });
// }
