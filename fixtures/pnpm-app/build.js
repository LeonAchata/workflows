import { mkdirSync, writeFileSync } from "node:fs";
import pc from "picocolors";
import { greet } from "./src/greet.js";

mkdirSync("dist", { recursive: true });
writeFileSync("dist/index.html", `<!doctype html><title>fixture</title><h1>${greet(process.env.GREETING ?? "CI")}</h1>\n`);
// A dotfile, like the .htaccess a static site ships, must survive the artifact
writeFileSync("dist/.htaccess", "Options -Indexes\n");
console.log(pc.green("built dist/index.html"));
