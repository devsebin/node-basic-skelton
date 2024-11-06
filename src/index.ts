import "module-alias/register";
// import "dotenv/config";
import App from "./app";

const app = new App(Number(3000));

app.listen();
