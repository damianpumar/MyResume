import { exec } from "child_process";
import fs from "fs";

const FILE = ".env";
const GIT_HASH = "git rev-parse --short HEAD";

const date = new Date().toISOString().split("T")[0].replaceAll("-", ".");

exec(GIT_HASH, (error, hashCode, stderr) => {
  if (error) {
    return;
  }
  if (stderr) {
    return;
  }

  const version = `${date} - ${hashCode.trim()}`;

  console.log("DEFINING VERSION", version);

  const result = `RELEASE_DATE="${date}"\nRELEASE_VERSION="${hashCode.trim()}"`;

  fs.appendFile(FILE, result, "utf8", function (err) {
    if (err) return console.log(err);

    console.log("NEW VERSION UPDATED", version);
  });
});
