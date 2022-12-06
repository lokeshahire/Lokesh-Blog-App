import express from "express";
import mongoose from "mongoose";
// import blogrouter from "./routes/blog-routes";
import blogrouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
// app.use(cors({
//     origin:["http://localhost:3000"]
// }));
app.use(cors());
app.use("/user", router);
app.use("/blogs", blogrouter);

mongoose
  .connect("mongodb://0.0.0.0:27017/LokeshBlog")
  .then(() => app.listen(5000))
  .then(() => console.log("conn to 5000"))
  .catch((err) => console.log(err));
