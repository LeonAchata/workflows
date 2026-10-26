import { mkdirSync, writeFileSync } from "node:fs";
import pc from "picocolors";
import { greet } from "./src/greet.js";

mkdirSync("dist", { recursive: true });
writeFileSync("dist/index.html", `<!doctype html><title>fixture</title><h1>${greet(process.env.GREETING ?? "CI")}</h1>\n`);
console.log(pc.green("built dist/index.html"));
