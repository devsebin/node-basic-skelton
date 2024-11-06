import express, { Application } from "express";
import mongoose from "mongoose";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { errorResponse } from "@virtualift/common";
import authenticationRouter from "@/routes/authentication-routes";

class App {
  public express: Application;
  public port: number;
  constructor(port: number) {
    this.express = express();
    this.port = port;
    this.initializeMiddleware();
    this.initializeDatabaseConnection();
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.express.use("/api/authentication/v1", authenticationRouter);
  }

  private initializeMiddleware(): void {
    this.express.use(helmet());
    this.express.use(cors());
    this.express.use(morgan("dev"));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(compression());
  }

  private async initializeDatabaseConnection() {
    const connection_url =
      "mongodb://localhost:27017,localhost:27018,localhost:27019/stock?replicaSet=rs0";
    mongoose.set("strictQuery", false);
    mongoose.connect(connection_url, {
      readPreference: "secondaryPreferred",
      writeConcern: {
        w: "majority",
      },
    });
    const db = mongoose.connection;
    // db.on("error", (err) => errorResponse("DB connection failed", err));
    db.on("error", (err) => console.log(err));

    db.once("open", () => console.log("Connected to MongoDB!"));
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
