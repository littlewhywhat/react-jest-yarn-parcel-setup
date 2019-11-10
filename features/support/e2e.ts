import { spawn } from "child_process";
import { config } from "./config";

const cwd = process.cwd();
const parcelPath = `${cwd}/node_modules/.bin/parcel`;
const index = `${cwd}/src/index.html`;
spawn(parcelPath, ["serve", index, "--port", `${config.port}`]);
