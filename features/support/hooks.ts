import { Before } from "cucumber";
import { config } from "./config";

Before("@mainpage", async t => {
  await t.navigateTo(`http://localhost:${config.port}`);
});
